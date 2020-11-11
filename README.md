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

## Link

This app can be accessed at https://treegee73.github.io/code-quiz/

## Challenges

I am still working out two challenged with the code, appending high scores to the high score screen and displaying the correct / incorrect after answer selection on the screen rather than as alerts.

For the correct / incorrect I do have working code that will display accordingly if a the answer is correct or incorrect, however I could not clear that information before moving to the next question. Because this was not the desired effect, I temporarily utilize alerts to notify the player if their answer is correct or incorrect.

For the append high score issue, I understand how to append to the page and create a list, however I could not get that to work with storing locally to the device. I believe it to be a simple misunderstanding of how data is stored locally and will be working to make this improvement as well.

## Credits
Background image is a free to use image that was obtained from Pexels.com.