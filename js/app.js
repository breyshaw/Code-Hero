/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let isWinner, isPlaying, isLoser

/*------------------------ Cached Element References ------------------------*/

const form = document.querySelector('#form')
const answerInput = document.querySelector("#answer-input")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#startOver-button")
const path1Btn = document.querySelector("#path-one")
const path2Btn = document.querySelector("#path-two")
const enemyHel = document.querySelector("#enemyHealth")
const playerHel = document.querySelector("#playerHealth")
const enemyImg = document.querySelector("#enemy")
const pathOneImg = document.querySelector("#pathOneImg")
const pathTwoImg = document.querySelector("#pathOneImg")


/*----------------------------- Event Listeners -----------------------------*/

form.addEventListener('reset', init)
resetBtn.addEventListener('click', init)
//Need to ask if I can use this inBattle like this
//Or if I need to take the route going with path2Btn
path1Btn.addEventListener('click', inBattle)
// path2Btn.addEventListener('click', function (evt) {
//     evt.preventDefault()
//     if (isWinner === false) {
//     messageEl = randomQuestion()
//     enemyHel.removeAttribute('hidden')
//     playerHel.removeAttribute('hidden')
//     enemyImg.removeAttribute('hidden')
    // }
// })



/*-------------------------------- Functions --------------------------------*/



init()

function init() {
    messageEl.innerText = 'Choose a path..'
    resetBtn.setAttribute('hidden', true)
    // enemyHel.setAttribute('hidden', true)
    // playerHel.setAttribute('hidden', true)
    // enemyImg.setAttribute('hidden', true)
    //keeping these lines in case inBattle does not "unhide" the elements when tested
    pathOneImg.setAttribute('hidden', false)
    pathTwoImg.setAttribute('hidden', false)
    isWinner = false
    isLoser = false
    isPlaying = true
    inBattle() = false
    playerHel = (100 / 100)
    enemyHel = (100 / 100)
    render()
}

function inBattle() {
    messageEl = randomQuestion()
    enemyHel.setAttribute('hidden', false)
    playerHel.setAttribute('hidden', false)
    enemyImg.setAttribute('hidden', false)
}

//I will concentrate more on this function later
function randomQuestion() {
    messageEl.innerText = 'This will be a random question function'
}


//Render Functions (I think I am struggling here)
function renderAns(lastAns) {
    if (lastAns !== correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
        playerHel = playerHel - 20 / 100
    } else {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You cast fireball!!`
        enemyHel = enemyHel - 20 / 100
    }
}

function renderPath() {
    messageEl.innerText = 'Choose a path..'
    resetBtn.setAttribute('hidden', true)
    pathOneImg.setAttribute('hidden', false)
    pathTwoImg.setAttribute('hidden', false)
    isWinner = false
    isLoser = false
    isPlaying = true
    inBattle() = false
}

function renderWin() {

}

function renderDied() {

}

function render() {
    if (isPlaying = true) {
        renderPath()
    } else if (isWinner = true) {
        renderWin()//render winning screen? or type out the function here if I have to.
    }
    if (isLoser = true) {
        renderDied()//render losing screen? or type out the function here if I have to.
    }
}