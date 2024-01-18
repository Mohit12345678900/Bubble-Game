var timer=60;
let rnd=0;
var score=0;

function increaseScore(){
    score+=10;
    document.querySelector("#score").innerHTML=score;
}


function getcircle(){
    var clutter = " ";
    for(var i=0;i<65;i++){
        var rn= Math.floor(Math.random()*10);
        clutter+= `<div class="circle">
        <h3>${rn}</h3>
    </div>`
    }
    
    document.querySelector("#bpanel").innerHTML=clutter;
}

function getTimer(){
   var time= setInterval(function(){
     if(timer>0){
        timer--;
        document.querySelector("#timer").innerHTML=timer;
     }
     else{
        document.querySelector("#bpanel").innerHTML="Game Over";
        clearInterval(time);
     }
    },1000);
}

function getNewhit(){
    rnd= Math.floor(Math.random()*10);
   document.querySelector("#hit").innerHTML=rnd;
}

document.querySelector("#bpanel").addEventListener("click",function(dets){
   var a= Number(dets.target.textContent);
   if(a===rnd)
    {
        increaseScore();
        getNewhit();
        document.querySelector("#bpanel").innerHTML=" ";
        getcircle();
    }
})

getNewhit()
getcircle();
getTimer();