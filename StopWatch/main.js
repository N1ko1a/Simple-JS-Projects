window.onload = function () {//cim pokrenemo program ova funkcija se izvrsava
  
  var seconds = 00; 
  var tens = 00; 
  //uzimamo elemente iz html-a
  var appendTens = document.getElementById("tens1")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {//sta ce da se desi kada kliknemo na dugme
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);//setIntervaL(izvrsava funkciju na svakih 10milsec)-na svakih 
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);//samo zaustavlja tajmer
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);//zaustavlja tajmer 
    tens = "00";//vracamo tajmer na nulu
  	seconds = "00";//vracamo tajmer na nulu
    appendTens.innerHTML = tens;//updejtujemo izlaz u html-u
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {//funkcija da startujemo tajmer
    tens++; //povecavamo za 1
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;//ako je manje ili jednako 9 mora prvo da ide 0 pa broj jer prikazujemo dvocifreni broj 01,02..09
    }
    
    if (tens > 9){//Ako je veci od devet onda ce broj da bude dvocifreni pa ne moramo da dodajemo 0 na pocetku
      appendTens.innerHTML = tens;//10 11 12 13...
      
    } 
    
    if (tens > 99) {//ako je veci od 100 onda krecemo sa brojanjem sec
      console.log("seconds");
      seconds++;//povecavamo za 1
      appendSeconds.innerHTML = "0" + seconds;//isto kao gore nije dvocifren broj
      tens = 0;//kada dobijemo 1 sec moramo da vratimo na 0 da bih poceli da brojimo sledecu sec
      appendTens.innerHTML = "0" + 0;//postavljamo izlaz opet na 00
    }
    
    if (seconds > 9){//ako je vece od 9 onda je dvocifren broj pa nam ne treba 0 ispred
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}