// Variables
const startBtn = document.querySelector('#start');
const startPrompt = document.querySelector('#start-prompt');
const questionContainer = document.querySelector('#question-container');
const questionText = document.querySelector('#question-text');
const answerDiv = document.querySelector('#answers');
var timeEl = document.querySelector('#time');
var mainEl = document.getElementById("main");

// Questions Array: Quiz questions and answers
const questions = [
    {
        text: 'Han Solo was able to make the Kessel Run in slightly over 12 parsecs because he __________.',
        answers: ['took a shortcut', 'exceeded warp 10, breaking a speed record', 'called an Uber', 'he spent his life training for the run'],
        correctIndex: 0,
    },

    {
        text: 'Data is an android that is utilizes __________ to function and store information.',
        answers: ['a 500 zettabyte hard drive', 'electromagnetics', 'a positronic brain', 'cloud-based apps and file sharing'],
        correctIndex: 2,
    },

    {
        text: 'Malcolm \'Mal\' Reynolds was a former ___________ sergeant during the civil war.',
        answers: ['Confederate', 'Union', 'gunnery', 'Browncoat'],
        correctIndex: 3,
    },

    {
        text: 'Daleks are best known for their appearance and their battle cry, __________',
        answers: ['Exterminate!', 'Revenge!', 'Vive les Robots! ', 'Fire! Fire! Fire!'],
        correctIndex: 0,
    },

    {
        text: 'Bender\'s full name is __________.',
        answers: ['Gender Bender', 'Bender Bending Rodriguez', 'Amigo Bandido \'Bending\' de Acero', 'Frank \'Going on a Bender\' Jones'],
        correctIndex: 1,
    },

    {
        text: 'The antagonists in Battlestar Galactica were called __________.',
        answers: ['Chronicoms', 'Romulans', 'Cylons', 'Zentradi'],
        correctIndex: 2,
    },
    
    {
        text: 'Mandalore the Great wielded __________.',
        answers: ['The Green Destiny', 'Excalibur', 'The Sword of Gryffindor', 'The Darksaber'],
        correctIndex: 3,
    },
];

let questionIndex = 0;

// registering event handlers
startBtn.addEventListener('click', handleStartClick);
answerDiv.addEventListener('click', handleAnswerClick);

// Functions - Timer, Start Click, Questions, & Answer Click
function handleStartClick(e) {
    // start the timer
    
    // hide start prompt
    startPrompt.style.display = 'none';

    // show questions and answers 
    questionContainer.style.display = 'block';
    
    administerQuiz();
};

function administerQuiz() {
    // Create a variable to store the current question
    const currentQuestion = questions[questionIndex];
    
    // Set the text content for the HTML element that displays the question
    questionText.textContent = currentQuestion.text;
    
    // Clear previous answer buttons
    answerDiv.innerHTML='';

    // Create a button for each question and possible answer
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        // Create a variable to store the answer text
        const answer = currentQuestion.answers[i];
        // Create a button for each answer
        const btn = document.createElement('button');
        // Set the button class='btn btn-primary btn-color'
        btn.setAttribute('class', 'btn btn-primary btn-color');
        // Set the button text to the answers text
        btn.textContent = answer;
        // Append the button to the answers div
        answerDiv.appendChild(btn);
    };
};

function handleAnswerClick(e){
    e.preventDefault();
        if (!e.target.matches('button')) return;
        
        // Did the user chose the correct answer?
        // Store the user's answer
        const userAnswer = e.target.textContent;

        // Retrieve current question
        const question = questions[questionIndex];
        
        // Get correct answer
        const correctAnswer = question.answers[question.correctIndex];
        
        // Compare correct answer to user's response
        if (userAnswer === correctAnswer) {
            // If correct, move to next question.
            console.log('That is correct.');
        }
        else {
            // If incorrect, remove 10 seconds from time, move to next question.
            console.log('That was incorrect.')
        }
        questionIndex++;
        // Are there more questions?
        // If no more questions, end the game
        // Else continue to administer quiz
            administerQuiz()
};