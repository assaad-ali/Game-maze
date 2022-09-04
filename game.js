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
    let restartButton = document.createElement("button")
    restartButton.classList = "boundary"
    restartButton.id = "restart"
    restartButton.style = "margin: auto; text-align: center; width:100px; height:25px; display:flex; font-size: 15px; background-color: lightblue;"
    restartButton.innerText = "Restart"
    document.body.appendChild(restartButton)
    

}

/********************** Initialize Game **********************/

function initMaze() {

    updateHtml()
}

window.onload = function(){

    initMaze()
}


