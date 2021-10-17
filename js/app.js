/*-------------------------------- Constants --------------------------------*/
let isWinner, startBattle, lose


/*-------------------------------- Variables --------------------------------*/

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
/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
    messageEl.innerText = 'Choose a path..'
    resetBtn.setAttribute('hidden', true)
    enemyHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    enemyImg.setAttribute('hidden', true)
    pathOneImg.setAttribute('hidden', false)
    pathTwoImg.setAttribute('hidden' , false)
    isWinner = false
    isLoser = false
}