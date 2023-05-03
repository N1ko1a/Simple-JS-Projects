window.onload = function(){


var sec = 00;
var min = 00;
var sat = 00;
var appendSec = document.getElementById("sekundi");
var appendMin = document.getElementById('minuti');
var appendSat = document.getElementById('sat');

currentTime = function(){
    const d = new Date();
    var sat = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    if(sat <= 9 ){
        appendSat.innerHTML = "0"+sat;
    }
    if(sat >9){
        appendSat.innerHTML = sat;

    }

    if(sat > 23){
        appendSat.innerHTML = "00"
    }
    if( min<= 9 ){
        appendMin.innerHTML = "0"+min;
    }
    if(min >9){
        appendMin.innerHTML = min;
    }
    if(min > 60){
        appendMin.innerHTML = "00"
    }
    if(sec <= 9 ){
        appendSec.innerHTML = "0"+sec;
    }
    if(sec >9){
        appendSec.innerHTML = sec;
    }
    if(sec > 60){
        appendSec.innerHTML = "00"
    }
    setTimeout(function(){currentTime()}, 1000);
}

currentTime();


}
