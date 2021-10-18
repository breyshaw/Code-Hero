/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

// let isWinner, isPlaying, isLoser,

// /*------------------------ Cached Element References ------------------------*/

// const form = document.getElementById('#form')
// const answerInput = document.getElementById("#answer-input")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#startOver-btn")
const path1Btn = document.querySelector("#path-one")
// const path2Btn = document.getElementById("#path-two")
const enemyHel = document.querySelector("#enemyHealth")
const playerHel = document.querySelector("#playerHealth")
const enemyImg = document.querySelector("#enemy")
const pathOneImg = document.querySelector("#path1Img")
const pathTwoImg = document.querySelector("#path2Img")


// /*----------------------------- Event Listeners -----------------------------*/

// form.addEventListener('reset', init)
resetBtn.addEventListener('click', init)

path1Btn.addEventListener('click', event => {
    messageEl.innerText = 'An enemy has appeared!'
    pathOneImg.setAttribute('hidden', "")
    pathTwoImg.setAttribute('hidden', "")
    // enemyHel.setAttribute('hidden = false') 
    // THIS DOES NOT UNHIDE THEM
    // playerHel.setAttribute('hidden', false)
    // enemyImg.setAttribute('hidden', false)
    // pathOneImg.setAttribute('hidden', true)
    // pathTwoImg.setAttribute('hidden', true)
})

//Apparently this below wont work either, (calling the inBattle function created below on click)
// path1Btn.addEventListener('click', inBattle())




// /*-------------------------------- Functions --------------------------------*/



init()

function init() {
    messageEl.innerText = 'Choose a path..'
    // resetBtn.setAttribute('hidden', "") keeping this visible while testing
    enemyHel.setAttribute('hidden', "")
    playerHel.setAttribute('hidden', "")
    enemyImg.setAttribute('hidden', "")
    // pathOneImg.setAttribute('hidden', false)
    // pathTwoImg.setAttribute('hidden', false)
    // isWinner = false
    // isLoser = false
    // isPlaying = true
    // inBattle = false
    // playerHel = (100 / 100)//I know this will probably change when I get into the nitty gritty
    // enemyHel = (100 / 100)//I know this will probably change when I get into the nitty gritty
    // render()
}

// function inBattle() {
    // let (inBattle = true)
    // console.log('inBattle function works!')
    // messageEl = randomQuestion()
    // enemyHel.setAttribute('hidden', false)
    // playerHel.setAttribute('hidden', false)
    // enemyImg.setAttribute('hidden', false)
    // pathOneImg.setAttribute('hidden', true)
    // pathTwoImg.setAttribute('hidden', true)
// }

//I will concentrate more on this function later
// function randomQuestion() {
    // messageEl.innerText = 'This will be a random question function'
// }


//Render Functions (I think I am struggling here)
//will work on correctAns when I get there
// function renderAns(lastAns) {
//     if (lastAns !== correctAns) {
//         messageEl.className = 'damage'//to style the text later
//         messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
//         playerHel = playerHel - 20 / 100//I know this will probably change when I get into the nitty gritty
//     } else {
//         messageEl.className = 'attack'//to style the text later
//         messageEl.innerText = `${lastAns} is correct! You cast fireball!!`
//         enemyHel = enemyHel - 20 / 100//I know this will probably change when I get into the nitty gritty
//     }
// }

// function renderPath() {
//     messageEl.innerText = 'Choose a path..'
//     resetBtn.setAttribute('hidden', true)
//     pathOneImg.setAttribute('hidden', false)
//     pathTwoImg.setAttribute('hidden', false)
//     // isWinner = false
    // isLoser = false
    // isPlaying = true
    // inBattle() = false
// }

// function renderWin() {

// }

// function renderDied() {

// }

// function render() {
//     if (isPlaying = true) {
//         renderPath()
//     } else if (isWinner = true) {
//         renderWin()//render winning screen? or type out the function here if I have to.
//     }
//     if (isLoser = true) {
//         renderDied()//render losing screen? or type out the function here if I have to.
//     }
// }