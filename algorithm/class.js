const agenda = ['ext', 'gui', 'silk', 'corte'];

function dateHandler(time){
    return new Date(time);
}

const produto = {
    type: 'AGENDAS',
    qtde: 10000,
    setores: agenda,
    productionHour: 1000,
    date: new Date(),   
    forecast(){
        const days = (this.qtde/this.productionHour);
        const end = this.date.setDate(this.date.getDay() + days);
        console.log(this.date + '\n' + timeStamp(end));
    }

};

produto.forecast();