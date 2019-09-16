module.exports = function algorithm(){
    return orchestrator().then(x => x);
}

const dateHandler = require('./date');
const relativeFiller = require('./relative');
const axios = require('axios');

async function dataHandler(position){
    let res = await axios.get('http://localhost:3001/');
    return position ? res.data[position]: res.data;
}

async function orchestrator(){
    let dados = await dataHandler();
    let filteringResp = dados.map(element => {
            return {
                    setor:element['setor'].toUpperCase(),
                    type:element['type'].toUpperCase(),
                    process:element['process'].toUpperCase(),
                    difference: dateHandler(element['start'], element['end']),
                    qtdePessoa: (element['qtde'] / element['pessoas'])
                    
                  }
                });
    
    return filteringResp;
}

orchestrator().then(x => console.log([... new Set(x)]));