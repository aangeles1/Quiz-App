 const startButton = document.getElementById('start-btn')
 const nextButton = document.getElementById('next-btn')
 const questionContainerElement = document.getElementById('question-container')
 const questionElement = document.getElementById('question')
 const answerButtonsElement = document.getElementById('answer-buttons')

 let shuffledQuestions, currentQuestionIndex // will default to undefined
 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
 
 function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5) //sorts neg & pos #s in different ways
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
 }

 function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
 }

 function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
 }

 function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Reset'
        startButton.classList.remove('hide')
    }
 }

 function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
 }

 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
 }

 const questions = [
    {
        question: 'When was Javascript invented?', 
        answers: [
            { text: '1995', correct: true },
            { text: '1998', correct: false }, 
            { text: '1990', correct: false }, 
            { text: '2005', correct: false }
        ]
    }, 
    {
        question: 'What is one of the requirements of Bourbon?', 
        answers: [
            { text: 'aged in new, charred oak barrels', correct: true },
            { text: 'grain mixture at least 49% corn', correct: false }, 
            { text: 'only 1 color additive allowed', correct: false }, 
            { text: 'can be distilled no higher than 180 proof', correct: false }
        ]
    }, 
    {
        question: 'What was the fastest time the Appalachian trail was hiked?', 
        answers: [
            { text: '41 days, 7 hours and 39 minutes', correct: true },
            { text: '56 days, 9 hours and 13 minutes', correct: false },
            { text: '35 days, 2 hours and 26 minutes', correct: false },
            { text: '62 days, 11 hours and 12 minutes', correct: false }
        ]
    }, 
    {
        question: 'What year & team did Michael Jordan retire, the first time?', 
        answers: [
            { text: '1993, Chicago Bulls', correct: true },
            { text: '1993, Washington Wizards', correct: false },
            { text: '2001, Chicago Bulls', correct: false },
            { text: '2001, Washington Wizards', correct: false }
        ]
    }, 
    {
        question: 'What date was the Declaration of Independence signed?', 
        answers: [
            { text: 'August 2nd, 1776', correct: true },
            { text: 'September 18th, 1778', correct: false },
            { text: 'July 4th, 1776', correct: false },
            { text: 'July 2nd, 1776', correct: false }
        ]
    }, {
        question: 'What\'s your favorite activity?', 
        answers: [
            { text: 'Sports', correct: true },
            { text: 'Reading', correct: true },
            { text: 'Watching TV', correct: true },
            { text: 'Sleeping', correct: true }
        ]
    }, 
    {
        question: 'What\'s your favorite food?', 
        answers: [
            { text: 'Tacos/Burritos', correct: true },
            { text: 'Pasta', correct: true },
            { text: 'Sushi', correct: true },
            { text: 'Burgers/Pizza', correct: true }
        ]
    },
    {
        question: 'What\'s your favorite drink?', 
        answers: [
            { text: 'Spirit', correct: true },
            { text: 'Wine', correct: true },
            { text: 'Beer', correct: true },
            { text: 'Water/Juice/Soda', correct: true }
        ]
    }
 ]