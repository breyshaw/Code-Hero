/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

// let isWinner, isPlaying, isLoser

// /*------------------------ Cached Element References ------------------------*/

form = document.querySelector('#form')
answerInput = document.querySelector("#answer-input")
messageEl = document.getElementById("#message")
resetBtn = document.querySelector("#startOver-button")
path1Btn = document.querySelector("#path-one")
path2Btn = document.querySelector("#path-two")
enemyHel = document.querySelector("#enemyHealth")
playerHel = document.querySelector("#playerHealth")
enemyImg = document.querySelector("#enemy")
pathOneImg = document.querySelector("#pathOneImg")
pathTwoImg = document.getElementById("#pathOneImg")


// /*----------------------------- Event Listeners -----------------------------*/

// form.addEventListener('reset', init)
resetBtn.addEventListener('click', init)
//Need to ask if I can use this inBattle like this
//Or if I need to take the route going with path2Btn
path1Btn.addEventListener('click', inBattle())
// path2Btn.addEventListener('click', inBattle())
// document.getElementById('path-one')
// .addEventListener('click', inBattle()) 
// {
//     evt.preventDefault
//     if (isWinner === false) {
//     console.log('inBattle function works!')
//     messageEl = randomQuestion()
//     enemyHel.setAttribute('hidden', false)
//     playerHel.setAttribute('hidden', false)
//     enemyImg.setAttribute('hidden', false)
//     pathOneImg.setAttribute('hidden', true)
//     pathTwoImg.setAttribute('hidden', true)
//     }
// })
// path2Btn.addEventListener('click', function (evt) {
//     evt.preventDefault()
//     if (isWinner === false) {
//     messageEl = randomQuestion()
//     enemyHel.removeAttribute('hidden')
//     playerHel.removeAttribute('hidden')
//     enemyImg.removeAttribute('hidden')
//     }
// })



// /*-------------------------------- Functions --------------------------------*/



init()

function init() {
    // messageEl.innerText = 'Choose a path..'
    resetBtn.setAttribute('hidden', true)
    enemyHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    enemyImg.setAttribute('hidden', true)
    //keeping these lines in case inBattle does not "unhide" the elements when tested
    // pathOneImg.setAttribute('hidden', false)
    // pathTwoImg.setAttribute('hidden', false)
    // isWinner = false
    // isLoser = false
    // isPlaying = true
    inBattle = false
    // playerHel = (100 / 100)//I know this will probably change when I get into the nitty gritty
    // enemyHel = (100 / 100)//I know this will probably change when I get into the nitty gritty
    // render()
}

function inBattle() {
    // let (inBattle = true)
    console.log('inBattle function works!')
    // messageEl = randomQuestion()
    enemyHel.setAttribute('hidden', false)
    playerHel.setAttribute('hidden', false)
    enemyImg.setAttribute('hidden', false)
    // pathOneImg.setAttribute('hidden', true)
    // pathTwoImg.setAttribute('hidden', true)
}

//I will concentrate more on this function later
// function randomQuestion() {
//     // messageEl.innerText = 'This will be a random question function'
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