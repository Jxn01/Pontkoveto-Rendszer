function $(id){
    return document.getElementById(id);
}

var timeLeft = setInterval(myTimer, 1000);
var baseSeconds = 0;
var baseMinutes = 0; //órák+1
var baseHours = 0; //percek+1
var baseDays = 10;

function myTimer() {
    if(baseSeconds <= 0){
        baseMinutes = baseMinutes-1;
        baseSeconds = 60;
    }
    if(baseMinutes <= 0){
        baseHours -= 1;
        baseMinutes = 60;
    }
    if(baseHours <= 0){
        baseDays -= 1;
        baseHours = 24;
    }
    if(baseDays<0){
        clearInterval(timeLeft);
        setTimeout(function () {
            $("timer").innerHTML = "Ez a feladat már nem elérhető";
        }, 10);
    }
    
    baseSeconds = baseSeconds-1;
    seconds = pad(baseSeconds,2);
    minutes = pad(baseMinutes-1,2);
    hours = pad(baseHours-1,2);
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