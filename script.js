/* set variable for timer */ 
var timeRemaining = document.getElementById("quizTimer");
/* set variable for score */ 
var quizScore = document.getElementById("quizScore");
var quizQuestion = document.getElementById("quizQuestion");
var optionA = document.getElementById("answerA");

var optionB = document.getElementById("answerB");

var optionC = document.getElementById("answerC");

var optionD = document.getElementById("answerD");

var countdownTimer = 10;

var score = 0;
var question = 0;

// hide answer buttons until used

/*Create an Array of arrays of Questions and answers*/
var questionAnswerArray = [
    ["What part of the html document does the title go?", "body", "head", "heading", "footer"], 
    ["What is the shorthand order of directions for a margin in CSS?", "Left, Right, Top, Bottom", "Top, Bottom, Left, Right", "Top, Right, Bottom, Left", "Right, Left, Top, Bottom"],
    ["What symbols are used around comments in html?", "//Comment Here", "<!--Comment Here-->", "/*Comment Here*/", "#Comment Here"],
    ["Which of the following heading is the biggest by default?","<h1>", "<h3>", "<h4>", "<h6>"]
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


//add event llistener for answer buttons child of new div

//answerButtons.addEventListener("click", function(nextQuestion))

/* Post first question*/ 
function loadQuestions() {
    if(question === questionAnswerArray.length) {
        return;
    } else {
        quizQuestion.textContent = questionAnswerArray[question];
    }
    
}

/*next question function*/
function nextQuestion() {
    question++;
}

/* correct answer verify, add points and continues */ 
/* incorrect answer deducts time and continues */ 




/* timer goes off confirm */

/* configure score combo of time left and correct answers */

/* show score */

/* offer to add initials with score to save in local storage */

/* offer to play again to try to beat your score */
