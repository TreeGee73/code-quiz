# code-quiz

The purpose of this project is to create a quiz that utilizes JavaScript to manage what is displayed by interfacing with the DOM rather than making changes to the HTML. This is a good way to avoid "repeating yourself" when creating a dynamic page. This method will listen for events like a mouse click and then respond to the event, as well as allow for the creation of elements, manipulation of elements (change attributes, add content, etc.), and creating a locally stored record of data based on form input.

## Motivation / Project Criteria

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
[x] a timer starts and I am presented with a question
WHEN I answer a question
[x] I am presented with another question
WHEN I answer a question incorrectly
[x] time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
[x] the game is over
WHEN the game is over
[x] I can save my initials and score

## Approach

To complete the project, a web interface was developed with HTML. This interface is formatted using a combination of Bootstrap and custom CSS to give a polished look and feel that remained user friendly. The interface is powered by JavaScript. JavaScript was used to hide or display content based on user button clicks, manage a quiz timer, manage quiz question and answers displays, track answers and time, display messages, display a final score based on remaining time, and generate a local file that stores the users initials and score for later display.

The user (player) is presented with an opening start screen that describes the quiz, displays the time available to take the quiz, and a start button.

<p><img src="assets/interface_at_open.jpg" alt="Start Screen" title="Start Screen"></p>

When the player presses start they are presented with a screen that offers a question and four possible answers and the timer begins to count down from the allotted time toward zero. If the timer reaches zero before the player completes the quiz, the quiz will end automatically. When the player, answers correctly they are presented with an alert that they are correct and then they move to the next question. 

<p><img src="assets/questions_answers.jpg" alt="Questions & Answers Screen" title="Questions & Answers Screen"></p>

<p><img src="assets/timer_decremented.jpg" alt="Close-up of Timer Showing Decremented Time" title="Close-up of Timer Showing Decremented Time"></p>

Once all questions have been answered the player is shown a final score page that displays some copy and their final score. Here the player will also be prompted to create a high score record by recording their initials.

<p><img src="assets/final_score.jpg" alt="Final Score Screen" title="Final Score Screen"></p>

<p><img src="assets/record.jpg" alt="Final Score Screen with Player Data Entered" title="Final Score Screen with Player Data Entered"></p>

Once the player submits enter, they are taken to the high score screen where their score is displayed. They can then clear their score and/or restart the quiz.

<p><img src="assets/high_score.jpg" alt="High Score Screen with Player's Initials and Score" title="High Score Screen with Player's Initials and Score"></p>

<p><img src="assets/high_score_cleared.jpg" alt="High Score Screen with Player's Initials and Score Cleared" title="High Score Screen with Player's Initials and Score Cleared"></p>

## Technology

CSS Framework: [Bootstrap](https://getbootstrap.com/)
Bootstrap Depends on [JQuery](https://jquery.com/) and [JavaScript](https://www.javascript.com/) so these are also implimented on this site.

## Link

This app can be accessed at [code-quiz](https://treegee73.github.io/code-quiz/)

## Credits
Background image is a free to use image that was obtained from [Pexels.com](https://www.pexels.com/).

## Contact
If you have any questions or need to contact me about this app, visit my GitHub page at [TreeGee73](https://github.com/TreeGee73).
