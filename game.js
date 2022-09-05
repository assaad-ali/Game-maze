/********************* Global Variables **********************/

var boundaries = document.getElementsByClassName("boundary")
var playing = false
var gamescore = 0
var liveTimer = Date.now()
var user_score = []

/********************* Update Html **********************/
function updateHtml(){
    let scoreDiv = document.getElementsByClassName("example")[0];
    scoreDiv.id = "score";
    scoreDiv.style.textAlign = "center";

    let stopWatch = document.getElementsByTagName("p")[1];
    // console.log("stop watch",stopWatch);
    // stopWatch. = document.createElement("div");
    // stopWatch.classList.add("score_div");
    // console.log("stop watch",stopWatch);
    
    stopWatch.innerHTML = "<div class ='stopWatch' id='live_timer'></div> <div class ='stopWatch' id='last_score'></div> <div class ='stopWatch' id='best_score'></div>";
    stopWatch.style.display = "flex";
    stopWatch.style.height = "120px";
    stopWatch.style.marginTop = "30px";
    let stopWatch_divs = document.getElementsByClassName("stopWatch");
    for(let i=0; i < stopWatch_divs.length; i++){
        
        stopWatch_divs[i].style.width = '33%';
        stopWatch_divs[i].style.height = '100%';
        stopWatch_divs[i].style.padding = '15px';
        stopWatch_divs[i].style.textAlign = 'center';
    }
    document.body.appendChild(stopWatch);
    

}

/********************* Functions /**********************/

function theStart(){

    playing = true
    removeRedBoundaries()
    // liveTimer_div = document.getElementById("live_timer")
    startTimer()
}


function drawRedBoundaries(){
    
    for(let i =0; i<boundaries.length; i++){

        boundaries[i].classList.add("youlose")
    }
}

function onBoundary(){
    
    if(playing){
        lose()
    }
}

function lose(){

    playing = false

    updateScore(-10)
    updateMessage("You Lost!", "youlose")
    
    drawRedBoundaries()
    endTimer()
}

function removeRedBoundaries(){

    for(let i=0; i<boundaries.length; i++){

        boundaries[i].classList.remove("youlose")
    }
}


function updateScore(score){

    gamescore += score
    document.getElementById("score").innerText = gamescore
}

function updateMessage(message, _class){

    document.getElementById('status').innerText = message

    document.getElementById('status').className = _class
}


/********************* Events Listeners /**********************/

function addStartEventlistener(){

    document.getElementById("start").addEventListener("mouseenter", theStart)
}

function addOnBoundaryEventListener(){

    for(let i = 0; i < boundaries.length; i++){

        boundaries[i].addEventListener("mouseenter", onBoundary) 
    }
}

function addOutBoundaryEventListener(){

    document.getElementById("game").addEventListener("mouseleave", onBoundary)
}


/********************** Initialize Game **********************/

function initMaze() {

    updateHtml()
    addStartEventlistener()
    addOnBoundaryEventListener()
    
}

window.onload = function(){

    initMaze()
}


