var startTime=0;
var isRunning=false;
var currentTime;
var passedTime;
var toDisplay;
var forLapstime=0;
var counter=1;
function start(){
    if(!isRunning){
    isRunning=true;
    startTime=Date.now()-startTime;
    var timeDisplay = document.getElementById("time");
    timeDisplay.style.color="green";
    setInterval(update,10);
    }
};
function pause(){
    if(isRunning){
        isRunning=false;
        startTime=passedTime;
        var timeDisplay = document.getElementById("time");
        timeDisplay.style.color="red";
    }    
};
function reset(){
    isRunning=false;
    startTime=0;
    currentTime=null;
    passedTime=null;
    var timeDisplay = document.getElementById("time");
    timeDisplay.style.color="#101A1C";
    timeDisplay.innerHTML = `00:00:00.00`;
    forLapstime=0;
    document.getElementById("laps").innerHTML = "";
    counter=1;
    //
};
function update(){
    if(isRunning){
     currentTime=Date.now();
     passedTime=currentTime-startTime;
     toDisplay=document.getElementById("time");
     toDisplay.innerHTML =formatTime(passedTime);
}
};
function laps(){
    if(isRunning){
    var lapTime =passedTime - forLapstime;
    forLapstime = passedTime;
    var formattedLapTime = formatTime(lapTime);
    console.log(formattedLapTime);
    var paragraph = document.createElement("p");
    paragraph.textContent = "Lap"+counter+"  "+formattedLapTime;
    counter+=1;
    var lapsContainer = document.getElementById("laps");
    lapsContainer.insertBefore(paragraph, lapsContainer.firstChild);
    }
};
function formatTime(passedTime) {
     var hours=Math.floor(passedTime/(1000*60*60));
     var minutes=Math.floor(passedTime/(1000*60)%60);
     var seconds=Math.floor(passedTime/(1000)%60);
     var milliSec=Math.floor((passedTime/10)%100);
     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliSec.toString().padStart(2, '0')}`;
}