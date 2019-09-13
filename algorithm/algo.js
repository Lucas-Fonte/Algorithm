    const axios = require('axios');

    async function dataHandler(position){
        let res = await axios.get('http://localhost:3001/');
        return position ? res.data[position]: res.data;
    }

    async function algorithm(){
        let dados = await dataHandler('0');
        let filteringResp = dados.map(element => {
            if(element.setor == 'GUILHOTINA' ){ 
                return element;    
            }
        });

        let filteredResp = filteringResp.filter(
                function(element){
                    return element != undefined;
        });

        return filteredResp;
    }


   let data = algorithm();
   console.log(data);




