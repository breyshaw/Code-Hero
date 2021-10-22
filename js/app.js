/*-------------------------------- Variables --------------------------------*/
isWinner = false
isLoser = false
let randIdx
let currentQuestion
let questions = [
    { prompt: 'Do all variables have a data type? Submit yes or no.', correctAns: 'yes' },
    { prompt: `True or False: Control Flow is the execution of sequence of instructions in a program determined at run time with the use of control structures`, correctAns: 'true' },
    { prompt: 'The three primary types of control flow are: Sequence, looping, and _________. ', correctAns: 'branching' },
    { prompt: `What does expression 'happy' || 'sad' return?`, correctAns: 'happy' },
    { prompt: 'True or False. Each element in an array can hold any data type including objects, functions, even other arrays.', correctAns: 'true' },
    { prompt: 'What is the best method to use to iterate through an entire array?', correctAns: 'foreach' },
    { prompt: `What is the index number of 'green' in this array? const colors = ['red','green','blue']`, correctAns: '1' },
    { prompt: 'What method is used to copy a number of elements into a new array?', correctAns: 'slice' },
    { prompt: 'True or False. There is no difference between an argument and a parameter.', correctAns: 'false' },
    { prompt: 'An object is a collection of zero or more ___________.', correctAns: 'properties' },
    { prompt: 'Properties are key : ______ pairs.', correctAns: 'value' },
    { prompt: 'True or False: The for..in loop is used to iterate over the keys of an object.', correctAns: 'true' },
    { prompt: 'What does the acronym OOP stand for? Use spacing in the answer.', correctAns: 'object oriented programming' },
    { prompt: 'True or False: Encapsulation is a central principle of object-oriented programming.', correctAns: 'true' },
    { prompt: 'What is the JS keyword used to define a class?', correctAns: 'class' },
    { prompt: 'What is the name of the method that is automatically called when we instantiate a class?', correctAns: 'constructor' },
    { prompt: 'True or False: The constructor method’s purpose is to initialize the data properties of the new object being created (represented by this). ', correctAns: 'true' },
    { prompt: 'True or False: The methods in a class definition are seperated by a comma.', correctAns: 'false' },
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
    messageEl.innerText = 'As you are walking towards the alluring Temple of Time, a bokoblin appeared! Answer the questions below to battle!'
    messageEl.className = 'damage'
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
    messageEl.innerText = 'As night falls you get closer to the temple.. a lynel has appeared!! Answer the questions below to battle!'
    messageEl.className = 'damage'
    path1Btn.setAttribute('hidden', true)
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
    messageEl.className = 'message'
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
        playerHel.innerHTML = playerHel.innerHTML - 35
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
    messageEl.className = 'attack'
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
    title.setAttribute('hidden', true)
    footer.setAttribute('hidden', true)
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

