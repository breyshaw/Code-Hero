/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let isWinner, isLoser

/*------------------------ Cached Element References ------------------------*/
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
path1Btn.addEventListener('click') //callback needs to be added)
path2Btn.addEventListener('click')//callback function needed



/*-------------------------------- Functions --------------------------------*/

messageEl.innerText = ''

init()

function init() {
    messageEl.innerText = 'Choose a path..'
    resetBtn.setAttribute('hidden', true)
    // enemyHel.setAttribute('hidden', true)
    // playerHel.setAttribute('hidden', true)
    // enemyImg.setAttribute('hidden', true)
    //keeping this line in case inBattle does not "unhide" the elements when tested
    pathOneImg.setAttribute('hidden', false)
    pathTwoImg.setAttribute('hidden', false)
    isWinner = false
    isLoser = false
    inBattle() = false
    playerHel = 100/100
    enemyHel = 100/100
    render()
}

function inBattle() {
    messageEl = randomQuestion()
    enemyHel.setAttribute('hidden', false)
    playerHel.setAttribute('hidden', false)
    enemyImg.setAttribute('hidden', false)
    render()
}

function randomQuestion() {
    messageEl.innerText = 'This will be a random question function'
}


//Render Functions
function renderAns(lastAns) {
    if (lastAns !== correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
        playerHel = playerHel - 20/100
    } else {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You cast fireball!!`
        enemyHel = enemyHel - 20/100
    }
}

function renderPath1() {

}

function renderPath2() {

}