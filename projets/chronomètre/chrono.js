let sp = document.getElementsByTagName('span');
let bstart= document.querySelector('#start');
let b_stop= document.querySelector('#stop');
let b_reset= document.querySelector('reset');
let t;
let h=0;
let min = 0;
let sec = 0;
let ms = 0; 

function update(){
   
    ms+=1
    if(ms==10){ms=1; sec+=1}
    if(sec==60){sec=0; min+=1}
    if(min==60){min=0; h+=1}

   

    sp[0].innerHTML = h+"h";
    sp[1].innerHTML = min+"min";
    sp[2].innerHTML = sec+"sec";
    sp[3].innerHTML = ms+"ms";
    
    
    }
   
function start(){
    t= setInterval(update,100);
    bstart.disabled= true;
}
 function stop(){
    clearInterval(t);
    bstart.disabled=false;
 }
 function reset(){
    clearInterval(t);
    bstart.disabled=false;
    h=0,min=0,sec=0,ms=0;
    
    sp[0].innerHTML = h+"h";
    sp[1].innerHTML = min+"min";
    sp[2].innerHTML = sec+"sec";
    sp[3].innerHTML = ms+"ms";
    
 }


 
 /*function time(){
    let date= new Date();
    h= date.getHours();
    min=date.getMinutes();
    sec= date.getSeconds();
    ms= date.getMilliseconds();

    if(h<10){h="0"+h;}
    if(min<10){min="0"+min;}
    if(sec<10){sec="0"+sec;}

    if(h>12){
        h=h-12;
    }

    sp[0].innerHTML = h+"h";
    sp[1].innerHTML = min+"min";
    sp[2].innerHTML = sec+"sec";
    sp[3].innerHTML = ms+"ms";

    
    
    }

function start(){
        t= setInterval(time,100);
        bstart.disabled= true
    }*/

    