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

/*Create an Array of Questions*/
var questionArray = [
    "What part of the html document does the title go?",
    "What is the shorthand order of directions for a margin in CSS?",
    "What symbols are used around comments in html?",
    "Which of the following heading is the biggest by default?"
]


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
    var question = 0;
    if(question === questionArray.length) {
        return;
    } else {
        quizQuestion.textContent = questionArray[question];
    }
    
}

/*next question function*/


/* correct answer verify, add points and continues */ 
/* incorrect answer deducts time and continues */ 


/*second question posts */ 

/* correct answer verify, add points and continues */ 
/*incorrect answer deducts time and continues */ 


/*third question posts */ 

/* correct answer verify, add points and continues */ 
/*incorrect answer deducts time and continues */ 


/*fourth question posts */ 

/* correct answer verify, add points and continues */
/*incorrect answer deducts time and continues */


/*fifth question posts */

/* correct answer ,verify add points and continues */
/*incorrect answer deducts time and continues */


/* timer goes off confirm */

/* configure score combo of time left and correct answers */

/* show score */

/* offer to add initials with score to save in local storage */

/* offer to play again to try to beat your score */
