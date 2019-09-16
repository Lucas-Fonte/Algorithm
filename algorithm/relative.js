const axios = require('axios');

async function dataHandler(){
    return await axios.get('http://localhost:3001/algorithm');
}

async function relativeFiller(){

    const defaultArray = [ 'EXTRUSAO',               
                           'GUILHOTINA',                        
                           'SERIGRAFIA',
                           'CORTE',
                           'MONTAGEM',
                           'ACABAMENTO' ];
    
    const data = await dataHandler();
    console.log(Object.keys(data));

}

relativeFiller();

    // function organizeArray(array){
    //     return array.map((element, index) => {
    //         return ((element == defaultValue)
    //                 ?[index, element]
    //                 : [index, element]);
                
    //     });