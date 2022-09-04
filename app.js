

function digitalClock(){
    var date = new Date()
     
    var hrs = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var day = date.getDay()
    var month = date.getMonth()
    var year = date.getFullYear()

    console.log(date)
    let showTime = document.getElementById("time");
    let showDate = document.getElementById("date");

    setTimeout("digitalClock()",1000);

    let minStr = min
    let hrsStr = hrs
    let secStr = sec
    let session =''


    if(hrsStr == 0){
        hrsStr = 12;
    }
    if(hrsStr > 12){
        hrsStr = hrsStr - 12;
        session = 'PM'
    }
    else{
        session = 'AM'
    }
    if(secStr < 10){
        secStr = '0'+secStr;
    }
    if(minStr < 10){
        minStr = '0'+minStr;
    }
    if(hrsStr < 10){
        hrsStr = '0'+hrsStr;
    }
    if(day == 0){
        day = 1;
    }
    showTime.innerHTML = hrsStr +' : '+ minStr +' : '+ secStr+' '+session;
    showDate.innerHTML = day +' - '+ month +' - '+ year;

}
digitalClock();


