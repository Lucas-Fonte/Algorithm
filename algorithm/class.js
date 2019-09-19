const productType = ['AGENDA', 'CADERNO', 'SACOLA', 'EMBALAGEM'];
const productOperations = new Array();

productOperations['AGENDA'] = {
                                ext: 200, 
                                gui: 1000, 
                                silk: 1500, 
                                corte: 3000
                            };

class Project {
    constructor(type){
            this.type = type;
            this.qtde = 10000;
            this.setores = productOperations[type];
            this.date = new Date();
    };
    
    forecast(){
        const days = (this.qtde/this.productionHour);
        const end = new Date();
        end.setDate((this.date.getDate() + days));
        return end;
    }

    plusOne(){
        return this.qtde + 10;
    }
}

const produto = new Project('AGENDA');
console.log(produto.setores['ext']);
