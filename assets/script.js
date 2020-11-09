const startBtn = document.querySelector('#start');
const startPromp = document.querySelector('#container-start');
const questionCont = document.querySelector('#container-question');
const questionText = document.querySelector('#question-text');
const answerDiv = document.querySelector('#answers')

// Quiz questions and answers
const questions = [
    {
        text: 'Han Solo was able to make the Kessel Run in slightly over 12 parsecs because he __________.',
        answers: ['took a shortcut', 'exceeded warp 10, breaking a speed record', 'called an Uber', 'he spent his life training for the run']
        correctIndex: 0,
    },
    {
        text: 'Data is an android that is utilizes __________ to function and store information.',
        answers: ['a 500 zettabyte hard drive', 'electromagnetics', 'a positronic brain', 'cloud-based apps and file sharing']
        correctIndex: 2,
    },
    {
        text: 'Malcolm \'Mal\' Reynolds was a former ___________ sergeant during the civil war.',
        answers: ['Confederate', 'Union', 'gunnery', 'Browncoat']
        correctIndex: 3,
    },
    {
        text: 'Daleks are best known for their appearance and their battle cry, __________',
        answers: ['Exterminate!', 'Revenge!', 'Vive les Robots! ', 'Fire! Fire! Fire!']
        correctIndex: 0,
    },
    {
        text: 'Bender's full name is __________.',
        answers: ['Gender Bender', 'Bender Bending Rodriguez', 'Amigo Bandido \'Bending\' de Acero', 'Frank \'Going on a Bender\' Jones']
        correctIndex: 1,
    },
    {
        text: 'The antagonists in Battlestar Galactica were called __________.',
        answers: ['Chronicoms', 'Romulans', 'Cylons', 'Zentradi']
        correctIndex: 2,
    },
    {
        text: 'Mandalore the Great wielded __________.',
        answers: ['The Green Destiny', 'Excalibur', 'The Sword of Gryffindor', 'The Darksaber']
        correctIndex: 3,
    },
];

// registering a click event handler
startBtn.addEventListener('click', function (e) {
    // start the timer
    // hide start prompt
    startPromp.style.display = 'none';

    // show questions and answers
    questionCont.style.display = 'block';

    // Set the text content for the HTML element that displays the question
    questionText.textContent = questions [questionIndex].text;
    
    // Create a button for each question and possible answer
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        // Create a variable to store the answer text
        const answer = questions[questionIndex].answers[i];
        // Create a button for each answer
        const btn = document.createElement('button');
        // Set the button class='btn btn-primary'
        btn.setAttribute('class', 'btn btn-primary');
        // Set the button text to the answers text
        btn.textContent = answer;
        // Append the button to the answers div
        answerDiv.appendChild(btn);
    }

});



answerDev.addEventListener('click', function (e){
    e.preventDefault();

    if (!e.target.matches('button')) return;

    // Did the user chose the correct answer?
    // Retrieve current question
    const question = questions[questionIndex];
    // Get correct answer
    const correctAnswer = question.answers[question.correctIndex];
    // Compare correct answer to user's response
    // If correct, move to next question.
    // If incorrect, remove 10 seconds from time, move to next question.
})