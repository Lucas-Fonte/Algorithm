
const productType = ['AGENDA', 'CADERNO', 'SACOLA', 'EMBALAGEM'];

const defaultStructure = ['CAPA', 'CONTRACAPA', 'MIOLO', 'PDO', 'ESPIRAL'];

const productOperations = {
                            ext:  {qtdeHour: 200, costHour: 40 }, 
                            gui:  {qtdeHour: 100, costHour: 33 }, 
                            silk: {qtdeHour: 500, costHour: 35 }, 
                            corte:{qtdeHour: 1000, costHour: 30 }
                        };

                            
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
        const days = (this.qtde/ 200);
        const end = new Date();
        end.setDate((this.date.getDate() + days));
        return end;
    }

    eventGenerator(){
        return this.structure.map(component => 
                ({
                    title: component.type,
                    start: this.date,
                    end: this.forecast(),
                    qtde: component.qtde,                            
                })
            );
    }

    costGenerator(){
        return this.structure.map(component => 
            ({
                title: component.type,
                qtde: component.qtde,
                unit: component.order.map(costElement => (component.operations[costElement].costHour/component.operations[costElement].qtdeHour).toFixed(2)),                    
            })
        );
    }
}

const result = ['AGENDA', 10000];
const produto = new Project(result);

// const component = new Component('CAPA');

console.log(produto.eventGenerator(), produto.costGenerator());