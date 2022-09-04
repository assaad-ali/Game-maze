/********************* Global Variables **********************/

var elements = document.getElementsByClassName("boundary")
var playing = false
var gamescore = 0
var liveTimer = Date.now()
var user_score = []

/********************* Update Html **********************/
function updateHtml(){
    let scoreDiv = document.getElementsByClassName("example")[0]
    scoreDiv.id = "score"
    scoreDiv.style.textAlign = "center"

}

/********************** Initialize Game **********************/

function initMaze() {

    updateHtml()
}

window.onload = function(){

    initMaze()
}


