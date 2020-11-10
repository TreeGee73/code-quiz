// Variables
// Timer
const timeEl = document.querySelector('#time');
let timeLeft = 60;
let timeTick ;

// Start block
const startBtn = document.querySelector('#start');
const startPrompt = document.querySelector('#start-prompt');

// Question & answers block
const questionContainer = document.querySelector('#question-container');
const questionText = document.querySelector('#question-text');
const answerDiv = document.querySelector('#answers');

// User score block
const scoreContainer = document.querySelector('#score-container');
const scoreDiv = document.querySelector('#score');
const recordScore = document.querySelector('#record-score');
const initialsDiv = document.querySelector('#initials-input');
const userInitials = document.querySelector("#user-initials");

// High score block
const highScoreDiv = document.querySelector('#high-score');
const hScoreContainer = document.querySelector('#hscore-container');

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
recordScore.addEventListener('click', handleSubmitClick);


// Functions
function handleStartClick(e) {
    // Hide start prompt
    startPrompt.style.display = 'none';

    // Start counter count down; use setInterval to determine what happens each second
    timeTick = setInterval(countDown, 1000);

    // Show questions and answers 
    questionContainer.style.display = 'block';
    
    administerQuiz();
};


function countDown() {
    // Display timer & start countdown
    timeEl.innerHTML = `Time: ${timeLeft}`;
    // Stop quiz
    if (timeLeft < 1) {
        clearTimeout(timeTick);

        // Display score block
        displayScore();
    }
    timeLeft--;
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
            console.log('Correct');
            }
            else {
            // If incorrect, remove 10 seconds from time, move to next question.
            timeLeft -= 10;
            console.log('Incorrect')
            }
            questionIndex++;

            if (questionIndex === questions.length) {
                clearTimeout(timeTick);
                return displayScore();
            }
            
            administerQuiz();
        // Are there more questions?
        // If no more questions, end the game
        // Display the high score block and total remaining time = high score
        // Else continue to administer quiz
        // Else check timeLeft if timeLeft <= 0 end quiz
        // Display the high score block and total remaining time = high score
};

function displayScore() {    
    // Hide everything
    questionContainer.style.display = 'none';
    timeEl.style.display = 'none';

    // Show score block
    scoreContainer.style.display = 'block';

    // Set the text content for the HTML element that displays the score
    scoreDiv.textContent = `Your score is ${timeLeft}`;
    
    // Allow user to record their score
    // Write score to local, prepend it the score list
    

};

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//   }

function handleSubmitClick(e) {
  e.preventDefault();
    var user = {
        userInitials: userInitials.value.trim(),
        score: timeLeft,
    };
  
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    renderHighScore();
    
    // Save email and password to localStorage and render the last registered.
    localStorage.setItem("initials", userInitials);
        userInitials.textContent = userInitials;
  };

function renderHighScore() {
  // Hide score block
  scoreContainer.style.display = 'none';

  // Show high score block
  hScoreContainer.style.display = 'block';
  
  var highScoreList = localStorage.getItem('user');
  highScoreList = JSON.parse(highScoreList);

  highScoreDiv.textContent = highScoreList.userInitials + ': ' + highScoreList.score;
    
    };