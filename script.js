/* set variable for timer */ 
var timeRemaining = document.getElementById("quizTimer");
/* set variable for score */ 
var quizScore = document.getElementById("quizScore");
var quizQuestion = document.getElementById("quizQuestion");
var answerButtons = document.getElementById("answerButtons");
var answerA = document.getElementById("answerA");

var answerB = document.getElementById("answerB");

var answerC = document.getElementById("answerC");

var answerD = document.getElementById("answerD");
var feedback = document.getElementById("feedback");
var countdownTimer = 40;

var score = 0;
var question = 0;
// hide answer buttons until used

/*Create an Array of arrays of Questions and answers*/
var questionAnswerArray = [
    ["What part of the html document does the title go?", "body", "head", "heading", "footer", "answerB"], 
    ["What is the shorthand order of directions for a margin in CSS?", "Left, Right, Top, Bottom", "Top, Bottom, Left, Right", "Top, Right, Bottom, Left", "Right, Left, Top, Bottom", "answerC"],
    ["What symbols are used around comments in html?", "//Comment Here", "<!--Comment Here-->", "/*Comment Here*/", "#Comment Here", "answerB"],
    ["Which of the following heading is the biggest by default?","<h1>", "<h3>", "<h4>", "<h6>", "answerA"]
];

/* timer function */
function onClick() {
    timeRemaining.textContent = "Time remaining: " + countdownTimer;
    quizScore.textContent = "Score: " + score;
    loadQuestions();
    var startButton = document.getElementById("start-button");
    startButton.setAttribute("style", "display:none");
    var timer = setInterval(function () {
        countdownTimer --;
        timeRemaining.textContent = "Time remaining: " + countdownTimer;
        if(countdownTimer === 0) {
            clearInterval(timer);
            timeRemaining.textContent = "";
        }
    }, 1000);
}

/* click starts the quiz and quiz timer */ 
document.getElementById("start-button").addEventListener("click", onClick);


function checkAnswer(event) {
    var correctAnswer = questionAnswerArray[question][5];
    if(event.target.id === correctAnswer) {
        feedback.textContent = "Correct!";
        score = score + 5;
        quizScore.textContent = "Score: " + score;
        question++;
        loadQuestions();
    } else {
        feedback.textContent = "Wrong";
        countdownTimer = countdownTimer - 5;
        question++;
        loadQuestions();
    }
}
//add event llistener for answer buttons child of new div
answerButtons.addEventListener("click", checkAnswer);

/* Post first question*/ 
function loadQuestions() {
    if(question === questionAnswerArray.length) {
        return;
    } else {
        quizQuestion.textContent = questionAnswerArray[question][0];
        answerA.textContent = questionAnswerArray[question][1];
        answerB.textContent = questionAnswerArray[question][2];
        answerC.textContent = questionAnswerArray[question][3];
        answerD.textContent = questionAnswerArray[question][4];
        
    }
    
}


/*next question function
function nextQuestion() {
    question++;
}*/

/* correct answer verify, add points and continues */ 
/* incorrect answer deducts time and continues */ 




/* timer goes off confirm */

/* configure score combo of time left and correct answers */

/* show score */

/* offer to add initials with score to save in local storage */

/* offer to play again to try to beat your score */
