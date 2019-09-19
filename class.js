const productType = ['AGENDA', 'CADERNO', 'SACOLA', 'EMBALAGEM'];

const defaultStructure = ['CAPA', 'CONTRACAPA', 'MIOLO', 'PDO', 'ESPIRAL'];

const productOperations = {ext: 200, gui:1000, silk:1500, corte:3000};

                            
class Component {
    constructor(type){
        this.type = type;
        this.qtde = 10000;
        this.operations = productOperations;
        this.order = Object.keys(productOperations);
    }

    duration(){
        return this.order.map(element => (this.qtde/productOperations[element]).toFixed(2));
    }
}

class Project {
    constructor([type, qtde]){
            this.type = type;
            this.qtde = qtde;
            this.date = new Date();
            this.structure = defaultStructure.map(element =>  new Component(element));
            this.duration = defaultStructure.map(element =>  new Component(element).duration());

    };

    forecast(){
        const days = (this.qtde/ silkError(this.structure.capa.silk));
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

// const component = new Component('CAPA');

console.log(produto.structure, produto.duration);