/*-------------------------------- Variables --------------------------------*/
isWinner = false
isLoser = false
let randIdx
let currentQuestion
let questions = [
    { prompt: 'Do all variables have a data type? Submit yes or no.', correctAns: 'yes' },
    { prompt: '4+4', correctAns: '8' }
]
correctAns = ""

// /*------------------------ Cached Element References ------------------------*/

const intro = document.querySelector('#intro')
const form = document.querySelector('#form')
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#startOver-btn")
const path1Btn = document.querySelector("#path-one")
const bobHel = document.querySelector("#bobHealth")
const lynHel = document.querySelector("#lynHealth")
const playerHel = document.querySelector("#playerHealth")
const enemyImg = document.querySelector("#bokoblin")
const randomQuestion = document.querySelector('#random-question')
const submitBtn = document.querySelector('#answer-button')
const answerInput = document.querySelector('#answer-input')
const bobContinuebtn = document.querySelector('#continue-bob')
const lynelContinuebtn = document.querySelector("#continue-lynel")
const lynSubmitBtn = document.querySelector('#lynSubmitBtn')
const lynAnsInput = document.querySelector("#lynAnsInput")
const title = document.querySelector('#title')
const footer = document.querySelector("#footer")


// /*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', init)

path1Btn.addEventListener('click', event => {
    messageEl.innerText = 'As you are walking towards the alluring Temple of Time, a bokoblin appeared!'
    path1Btn.setAttribute('hidden', true)
    bobHel.removeAttribute('hidden')
    playerHel.removeAttribute('hidden')
    enemyImg.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    genRandomQuestion()
    randomQuestion.innerText = currentQuestion.prompt
    submitBtn.removeAttribute('hidden')
    answerInput.removeAttribute('hidden')
    intro.setAttribute('hidden', true)
    footer.removeAttribute('hidden')
    title.innerText = "Enemy Health:"
    title.className = "damage"
    randomQuestion.className = 'damage'
})

submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (isWinner === false) {
        renderAns(answerInput.value)
    }
})

lynSubmitBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (isWinner === false) {
        lynRenderAns(lynAnsInput.value)
    }
})

bobContinuebtn.addEventListener('click', event => {
    enemyImg.setAttribute('src', './Images/lynel.jpeg')
    messageEl.innerText = 'As night falls you get closer to the temple.. a lynel has appeared!!'
    // pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    // path2Btn.setAttribute('hidden', true)
    // pathTwoImg.setAttribute('hidden', true)
    bobHel.setAttribute('hidden', true)
    playerHel.removeAttribute('hidden')
    enemyImg.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    lynSubmitBtn.removeAttribute('hidden')
    lynAnsInput.removeAttribute('hidden')
    bobContinuebtn.setAttribute('hidden', true)
    lynHel.removeAttribute('hidden')
    genRandomQuestion()
    randomQuestion.innerText = currentQuestion.prompt
    messageEl.className = 'message'
    title.removeAttribute('hidden')
    footer.removeAttribute('hidden')
})

lynelContinuebtn.addEventListener('click', event => {
    enemyImg.setAttribute('src', './Images/triforce.gif')
    messageEl.innerText = 'Congratulations, you have reached the triforce!!'
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.removeAttribute('hidden')
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
    lynHel.setAttribute('hidden', true)
    resetBtn.removeAttribute('hidden')
    title.setAttribute('hidden', true)
    footer.setAttribute('hidden', true)
})

// /*-------------------------------- Functions --------------------------------*/

init()

function init() {
    messageEl.innerText = 'Click below to start your adventure!'
    intro.removeAttribute("hidden")
    intro.setAttribute('src', './Images/intro.gif')
    messageEl.removeAttribute('hidden')
    resetBtn.setAttribute('hidden', "")
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    enemyImg.setAttribute('hidden', true)
    enemyImg.setAttribute('src', './Images/bokoblin.jpeg')
    path1Btn.removeAttribute('hidden')
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
    footer.setAttribute('hidden', true)
    title.removeAttribute('hidden')
    title.innerText = 'Code Hero'
    title.className = 'title'
    playerHel.innerHTML = 100
    bobHel.innerHTML = 100
    lynHel.innerHTML = 100
}

function genRandomQuestion() {
    let randIdx = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[randIdx]

}

function renderAns(lastAns) {
    if (lastAns !== currentQuestion.correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You got wrecked with a mop!`
        playerHel.innerHTML = playerHel.innerHTML - 20
        enemyImg.setAttribute('src', './Images/damboko.gif')
    } else if (lastAns === currentQuestion.correctAns) {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You inflict damage on the bokoblin!`
        bobHel.innerHTML = bobHel.innerHTML - 20
        enemyImg.setAttribute('src', './Images/linkatk.gif')
    }
    genRandomQuestion()
    randomQuestion.innerText = currentQuestion.prompt
    render()
}

function lynRenderAns(lastAns) {
    if (lastAns !== currentQuestion.correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! Attack of the chickens!!`
        playerHel.innerHTML = playerHel.innerHTML - 25
        enemyImg.setAttribute('src', './Images/lynAtk.gif')
    } else if (lastAns === currentQuestion.correctAns) {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You parry rush the Lynel!`
        lynHel.innerHTML = lynHel.innerHTML - 10
        enemyImg.setAttribute('src', './Images/linkatklynel.gif')
    }
    genRandomQuestion()
    randomQuestion.innerText = currentQuestion.prompt
    render()
}

function renderWinBob() {
    bobContinuebtn.removeAttribute('hidden')
    messageEl.innerText = 'You defeated the bokoblin!'
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    resetBtn.setAttribute('hidden', "")
    bobHel.innerHTML = 100
    title.setAttribute('hidden', true)
    footer.setAttribute('hidden', true)
}

function renderLynWin() {
    messageEl.innerText = 'You defeated the Lynel!!'
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    resetBtn.setAttribute('hidden', "")
    bobContinuebtn.setAttribute("hidden", true)
    lynelContinuebtn.removeAttribute("hidden")
    lynSubmitBtn.setAttribute('hidden', true)
    lynAnsInput.setAttribute('hidden', true)
    title.setAttribute('hidden', true)
    footer.setAttribute('hidden', true)
    lynHel.setAttribute('hidden', true)
    messageEl.className = 'message'
}

function renderDied() {
    enemyImg.setAttribute('src', './Images/youdied.webp')
    messageEl.setAttribute('hidden', true)
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.removeAttribute('hidden')
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
    resetBtn.removeAttribute('hidden')
    lynSubmitBtn.setAttribute('hidden', true)
    lynAnsInput.setAttribute('hidden', true)
    lynHel.setAttribute('hidden', true)
}

function render() {
    if (playerHel.innerHTML <= 0) {
        renderDied()
    } else if (bobHel.innerHTML <= 0) {
        renderWinBob()
    } else if (lynHel.innerHTML <= 0) {
        renderLynWin()
    }
}

