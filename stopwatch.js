var startTime=0;
var isRunning=false;
var currentTime;
var passedTime;
function startPause(){
    if(!isRunning){
    isRunning=true;
    startTime=Date.now()-startTime;
    var imageElement = document.getElementById("startButton");
    imageElement.src = "photos/pause-button.png";
     imageElement = document.getElementById("resetButton");
    imageElement.src = "photos/arrow.png";
    var timeDisplay = document.getElementById("time");
    timeDisplay.style.color="green";
    setInterval(update,10);
    }
    else{
        isRunning=false;
        var imageElement = document.getElementById("startButton");
        imageElement.src = "photos/play.png";
        imageElement = document.getElementById("resetButton");
        imageElement.src = "photos/undo.png";
        startTime=passedTime;
        var timeDisplay = document.getElementById("time");
        timeDisplay.style.color="red";
    }
};
function resetLap(){
    if(isRunning){
       
    }
    isRunning=false;
    var imageElement = document.getElementById("startButton");
    imageElement.src = "photos/play.png";
    startTime=0;
    currentTime=null;
    passedTime=null;
    var timeDisplay = document.getElementById("time");
    timeDisplay.style.color="#101A1C";
    timeDisplay.innerHTML = `00:00:00.00`;
};
function update(){
    if(isRunning){
     currentTime=Date.now();
     passedTime=currentTime-startTime;
     var hours=Math.floor(passedTime/(1000*60*60));
     hours=hours.toString().padStart(2, '0');
     var minutes=Math.floor(passedTime/(1000*60)%60);
     minutes=minutes.toString().padStart(2, '0');
     var seconds=Math.floor(passedTime/(1000)%60);
     seconds=seconds.toString().padStart(2, '0');
     var milliSec=Math.floor((passedTime/10)%100);
     var toDisplay=document.getElementById("time");
     toDisplay.innerHTML = `${hours} : ${minutes} : ${seconds}.${milliSec}`;
}
};