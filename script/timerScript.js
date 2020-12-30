function $(id){
    return document.getElementById(id);
}

var myVar = setInterval(myTimer, 1000);
var baseSeconds = -1;
var baseMinutes = 0;
var baseHours = 0;
var baseDays = 10;

function myTimer() {
    if(baseSeconds <= 0){
        baseMinutes = baseMinutes-1;
        baseSeconds = 60;
    }
    if(baseMinutes <= 0){
        baseHours -= 1;
        baseMinutes = 59;
    }
    if(baseHours <= 0){
        baseDays -= 1;
        baseHours = 23;
    }
    
    baseSeconds = baseSeconds-1;
    seconds = pad(baseSeconds,2);
    minutes = pad(baseMinutes,2);
    hours = pad(baseHours,2);
    days = pad(baseDays,2);
    $("timer").innerHTML = days+":"+hours+":"+minutes+":"+seconds;
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function init(){
    myTimer();
}

window.addEventListener("load",init,false);