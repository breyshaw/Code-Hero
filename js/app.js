/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

// let isWinner, isPlaying, isLoser,

isWinner = false


// /*------------------------ Cached Element References ------------------------*/

const form = document.querySelector('#form')
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#startOver-btn")
const path1Btn = document.querySelector("#path-one")
const path2Btn = document.querySelector("#path-two")
const enemyHel = document.querySelector("#enemyHealth")
const playerHel = document.querySelector("#playerHealth")
const bokoblin = document.querySelector("#bokoblin")
const pathOneImg = document.querySelector("#path1Img")
const pathTwoImg = document.querySelector("#path2Img")
const randomQuestion = document.querySelector('#random-question')
const submitBtn = document.querySelector('#answer-button')
const answerInput = document.querySelector('#answer-input')
const bobContinuebtn = document.querySelector('#continue-bob')
const lynelContinuebtn = document.querySelector("#continue-lynel")


// /*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', init)

path1Btn.addEventListener('click', event => {
    messageEl.innerText = 'You choose Hyrule. As you are walking towards the alluring Temple of Time, a bokoblin appeared!'
    pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    path2Btn.setAttribute('hidden', true)
    pathTwoImg.setAttribute('hidden', true)
    enemyHel.removeAttribute('hidden') 
    playerHel.removeAttribute('hidden')
    bokoblin.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    randomQuestion.innerText = genRandomQuestion()
    submitBtn.removeAttribute('hidden')
    answerInput.removeAttribute('hidden')
    bobContinuebtn.removeAttribute('hidden')//This is here for now for testing purposes

    form.addEventListener('submit', function(evt) {
        evt.preventDefault()
        if (isWinner === false) {
        renderAns(answerInput.value)
        }
    })

})

path2Btn.addEventListener('click', event => {
    messageEl.innerText = 'You chose path two and an enemy has appeared!'
    pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    path2Btn.setAttribute('hidden', true)
    pathTwoImg.setAttribute('hidden', true)
    bokoblin.removeAttribute('hidden')
    enemyHel.removeAttribute('hidden') 
    playerHel.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    submitBtn.removeAttribute('hidden')
    answer.removeAttribute('hidden')
})

bobContinuebtn.addEventListener('click', event => {
    bokoblin.setAttribute('src', './Images/lynel.jpeg')
    messageEl.innerText = 'As night falls you get closer to the temple.. a lynel has appeared!!'
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.removeAttribute('hidden')
} )
lynelContinuebtn.addEventListener('click', event => {
    bokoblin.setAttribute('src', './Images/triforce.gif')
    messageEl.innerText = 'Congratulations, you have reached the triforce!!'
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.removeAttribute('hidden')
    enemyHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
} )
//Apparently this below wont work either, (calling the inBattle function created below on click)
// path1Btn.addEventListener('click', inBattle())




// /*-------------------------------- Functions --------------------------------*/



init()

function init() {
    messageEl.innerText = 'Choose a path..'
    // resetBtn.setAttribute('hidden', "") keeping this visible while testing
    enemyHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    bokoblin.setAttribute('hidden', true)
    bokoblin.setAttribute('src', './Images/bokoblin.jpeg')
    pathOneImg.removeAttribute('hidden')
    pathTwoImg.removeAttribute('hidden')
    path1Btn.removeAttribute('hidden')
    path2Btn.removeAttribute('hidden')
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
    // isWinner = false
    // isLoser = false
    // isPlaying = true
    // inBattle = false
    // playerHel = 100
    // enemyHel = 100
    // render()
}

// function inBattle() {
//     inBattle = true
//     console.log('inBattle function works!')
//     // messageEl = randomQuestion()
//     enemyHel.setAttribute('hidden', false)
//     playerHel.setAttribute('hidden', false)
//     enemyImg.setAttribute('hidden', false)
//     pathOneImg.setAttribute('hidden', true)
//     pathTwoImg.setAttribute('hidden', true)
// }

//I will concentrate more on this function later
function genRandomQuestion() {
    return randomQuestion.innerText = 'This will be a random question (correctAns = a)'
}


correctAns = "a"
//Render Functions (I think I am struggling here)
//will work on correctAns when I get there
// playerHel= 100
// enemyHel= 100

// lastAns = answerInput
function renderAns(lastAns) {
    if (lastAns !== correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
        playerHel.innerHTML = playerHel.innerHTML - 20//I know this will probably change when I get into the nitty gritty
    } else if (lastAns === correctAns) {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You inflict damage with the Master Sword!`
        // enemyHel = enemyHel - 20 //I know this will probably change when I get into the nitty gritty
    } 
}

// function renderAns(lastAns) {
//     if (lastAns === correctAns) {
//         messageEl.className = 'attack'//to style the text later
//         messageEl.innerText = `${lastAns} is correct! You cast fireball!!`
//         // playerHel = playerHel - 20//I know this will probably change when I get into the nitty gritty
//     } else if (lastAns !== correctAns) {
//         messageEl.className = 'damage'//to style the text later
//         messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
//         // enemyHel = enemyHel - 20 //I know this will probably change when I get into the nitty gritty
//     } else if () {
//         renderContinue()
//     }
// }



// function renderContinue() {

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