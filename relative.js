const axios = require('axios');

function dataHandler(){
    return axios.get('http://localhost:3001/algorithm');
}

async function relativeFiller(){

    const defaultArray = [ 'EXTRUSAO',               
                           'GUILHOTINA',                        
                           'SERIGRAFIA',
                           'CORTE',
                           'MONTAGEM',
                           'ACABAMENTO' ];
    
    const response = await dataHandler();

    for(i = 0; i< defaultArray.length; i++){
        console.log(response.data.find(element => element.setor == defaultArray[i]));
    }
}

relativeFiller();

    // function organizeArray(array){
    //     return array.map((element, index) => {
    //         return ((element == defaultValue)
    //                 ?[index, element]
    //                 : [index, element]);
                
    //     });