module.exports = function dateHandler(start, end){
    const date = [new Date(start), new Date(end)];
    const completeDate = date.map(element => {
        return { 
                 day: element.getDay(),
                 hour: element.getHours(),
                 minute: element.getMinutes()
               }
    });
    
    let duration = (completeDate[0].day == completeDate[1].day) 
                    ? completeDate[1].hour - completeDate[0].hour
                    : 'error';

    duration = duration + (completeDate[1].minute - completeDate[0].minute)/60;
    
    return duration;

}