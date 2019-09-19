const productType = ['AGENDA', 'CADERNO', 'SACOLA', 'EMBALAGEM'];
const productOperations = new Array();

productOperations['AGENDA'] = {
                                ext: 200, 
                                gui: 1000, 
                                silk: 1500, 
                                corte: 3000
                            };

class Project {
    constructor([type, qtde]){
            this.type = type;
            this.qtde = qtde;
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

const result = ['AGENDA', 10000];
const produto = new Project(result);
console.log(produto);
