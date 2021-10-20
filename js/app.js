/*-------------------------------- Variables --------------------------------*/

// let isWinner, isPlaying, isLoser,

isWinner = false
isLoser = false

// /*------------------------ Cached Element References ------------------------*/

const form = document.querySelector('#form')
// const lynform = document.querySelector('#lynform')
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#startOver-btn")
const path1Btn = document.querySelector("#path-one")
const path2Btn = document.querySelector("#path-two")
const bobHel = document.querySelector("#bobHealth")
const lynHel = document.querySelector("#lynHealth")
const playerHel = document.querySelector("#playerHealth")
const enemyImg = document.querySelector("#bokoblin")
const pathOneImg = document.querySelector("#path1Img")
const pathTwoImg = document.querySelector("#path2Img")
const randomQuestion = document.querySelector('#random-question')
const submitBtn = document.querySelector('#answer-button')
const answerInput = document.querySelector('#answer-input')
const bobContinuebtn = document.querySelector('#continue-bob')
const lynelContinuebtn = document.querySelector("#continue-lynel")
const lynSubmitBtn = document.querySelector('#lynSubmitBtn')
const lynAnsInput = document.querySelector("#lynAnsInput")


// /*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', init)

path1Btn.addEventListener('click', event => {
    messageEl.innerText = 'You choose Hyrule. As you are walking towards the alluring Temple of Time, a bokoblin appeared!'
    pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    path2Btn.setAttribute('hidden', true)
    pathTwoImg.setAttribute('hidden', true)
    bobHel.removeAttribute('hidden')
    playerHel.removeAttribute('hidden')
    enemyImg.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    randomQuestion.innerText = genRandomQuestion()
    submitBtn.removeAttribute('hidden')
    answerInput.removeAttribute('hidden')

    //I'd like to use submit below so that I can hit enter but the game breaks when doing so
    //Tried creating a seperate form for the lynel submit btn to be in but did not work

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

})

path2Btn.addEventListener('click', event => {
    messageEl.innerText = 'You chose path two and an enemy has appeared!'
    pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    path2Btn.setAttribute('hidden', true)
    pathTwoImg.setAttribute('hidden', true)
    enemyImg.removeAttribute('hidden')
    bobHel.removeAttribute('hidden')
    playerHel.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    submitBtn.removeAttribute('hidden')
    answer.removeAttribute('hidden')
})

bobContinuebtn.addEventListener('click', event => {
    enemyImg.setAttribute('src', './Images/lynel.jpeg')
    messageEl.innerText = 'As night falls you get closer to the temple.. a lynel has appeared!!'
    pathOneImg.setAttribute('hidden', true)
    path1Btn.setAttribute('hidden', true)
    path2Btn.setAttribute('hidden', true)
    pathTwoImg.setAttribute('hidden', true)
    bobHel.setAttribute('hidden', true)
    playerHel.removeAttribute('hidden')
    enemyImg.removeAttribute('hidden')
    randomQuestion.removeAttribute('hidden')
    randomQuestion.innerText = genRandomQuestion()
    lynSubmitBtn.removeAttribute('hidden')
    lynAnsInput.removeAttribute('hidden')
    bobContinuebtn.setAttribute('hidden', true)
    lynHel.removeAttribute('hidden')
    // bobHel.innerHTML = 100
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
})

// /*-------------------------------- Functions --------------------------------*/



init()

function init() {
    messageEl.innerText = 'Choose a path..'
    messageEl.removeAttribute('hidden')
    resetBtn.setAttribute('hidden', "")
    bobHel.setAttribute('hidden', true)
    playerHel.setAttribute('hidden', true)
    enemyImg.setAttribute('hidden', true)
    enemyImg.setAttribute('src', './Images/bokoblin.jpeg')
    pathOneImg.removeAttribute('hidden')
    pathTwoImg.removeAttribute('hidden')
    path1Btn.removeAttribute('hidden')
    path2Btn.removeAttribute('hidden')
    randomQuestion.setAttribute('hidden', true)
    submitBtn.setAttribute('hidden', true)
    answerInput.setAttribute('hidden', true)
    bobContinuebtn.setAttribute('hidden', true)
    lynelContinuebtn.setAttribute('hidden', true)
    playerHel.innerHTML = 100
    bobHel.innerHTML = 100
    lynHel.innerHTML = 100
}

//I will concentrate more on this function later
function genRandomQuestion() {
    return randomQuestion.innerText = 'This will be a random question (correctAns = a)'
}
correctAns = "a"


function renderAns(lastAns) {
    if (lastAns !== correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
        playerHel.innerHTML = playerHel.innerHTML - 20
        enemyImg.setAttribute('src', './Images/damboko.gif')
    } else if (lastAns === correctAns) {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You inflict damage!`
        bobHel.innerHTML = bobHel.innerHTML - 20
        enemyImg.setAttribute('src', './Images/linkatk.gif')
    }
    render()
}

function lynRenderAns(lastAns) {
    if (lastAns !== correctAns) {
        messageEl.className = 'damage'//to style the text later
        messageEl.innerText = `${lastAns} is wrong! You have taken damage!`
        playerHel.innerHTML = playerHel.innerHTML - 25
        enemyImg.setAttribute('src', './Images/lynAtk.gif')
    } else if (lastAns === correctAns) {
        messageEl.className = 'attack'//to style the text later
        messageEl.innerText = `${lastAns} is correct! You inflict damage!`
        lynHel.innerHTML = lynHel.innerHTML - 10
        enemyImg.setAttribute('src', './Images/linkatklynel.gif')
    }
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
}

function renderLynWin() {
    bobContinuebtn.removeAttribute('hidden')
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
}

function render() {
    if (playerHel.innerHTML < 0) {
        renderDied()
    } else if (bobHel.innerHTML <= 0) {
        renderWinBob()
    } else if (lynHel.innerHTML <= 0) {
        renderLynWin()
    }
}

