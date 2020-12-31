function $(id){
    return document.getElementById(id);
}

var timer = setInterval(myTimer, 1000);
var rawLeft = calcTime(new Date(2021,0,1));
/*
var baseSeconds = 0;
var baseMinutes = 0; //órák+1
var baseHours = 0; //percek+1
var baseDays = 10;
*/
function myTimer() {
/*
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
*/

    let tmp = rawLeft;

    rawLeft -= 1;
    let daysLeft = Math.floor(tmp / 86400);
    tmp -= daysLeft*86400;
    let hoursLeft = Math.floor(tmp / 3600);
    tmp -= hoursLeft*3600;
    let minutesLeft = Math.floor(tmp / 60);
    tmp -= minutesLeft * 60;
    let secsLeft = tmp;

    if(rawLeft <= 0){
        clearInterval(timer);
    }

    $("timer").innerHTML = pad(daysLeft,2)+":"+pad(hoursLeft,2)+":"+pad(minutesLeft,2)+":"+pad(secsLeft,2);
}

function dateToRaw(date){
    return(Math.floor(date.getTime()/1000));
}

function calcTime(target){
    let now = new Date();
    return dateToRaw(target) - dateToRaw(now);
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function init(){
    myTimer();
    
}

window.addEventListener("load",init,false);