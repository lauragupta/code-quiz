/* set variable for timer */ 
var quizTimer = document.getElementById("quizTimer");
/* set variable for score */ 
var quizScore = document.getElementById("quizScore");
var quizQuestion = document.getElementById("quizQuestion");
var answerButtons = document.getElementById("answerButtons");
var answerA = document.getElementById("answerA");

var answerB = document.getElementById("answerB");

var answerC = document.getElementById("answerC");

var answerD = document.getElementById("answerD");
var feedback = document.getElementById("feedback");
var gameOver = document.getElementById("gameOver");
var highScores = document.getElementById("highScores");
var scoreboardDirections = document.getElementById("scoreboardDirections");
var scoreForm = document.getElementById("scoreForm");
var countdownTimer = 40;

var score = 0;
var question = 0;
var timer;
var event;

// hide answer buttons until used

/*Create an Array of arrays of Questions and answers*/
var questionAnswerArray = [
    ["What part of the html document does the title go?", "body", "head", "heading", "footer", "answerB"], 
    ["What is the shorthand order of directions for a margin in CSS?", "Left, Right, Top, Bottom", "Top, Bottom, Left, Right", "Top, Right, Bottom, Left", "Right, Left, Top, Bottom", "answerC"],
    ["What symbols are used around comments in html?", "//Comment Here", "<!--Comment Here-->", "/*Comment Here*/", "#Comment Here", "answerB"],
    ["Which of the following heading is the biggest by default?","<h1>", "<h3>", "<h4>", "<h6>", "answerA"]
];



/* timer function */
function onStartButtonClick() {
    quizTimer.textContent = "Time remaining: " + countdownTimer;
    quizScore.textContent = "Score: " + score;
    loadQuestions();
    var startButton = document.getElementById("start-button");
    startButton.setAttribute("style", "display:none");
    timer = setInterval(function () {
        countdownTimer --;
        quizTimer.textContent = "Time remaining: " + countdownTimer;
        if(countdownTimer === 0) {
            clearInterval(timer);
            endTheGame();
        }
    }, 1000);

}

/* click starts the quiz and quiz timer */ 
document.getElementById("start-button").addEventListener("click", onStartButtonClick);

/*Clear feedback */
function clearFeedback() {
    feedback.textContent = "";
}

/* correct answer verify, add points and continues */ 
/* incorrect answer verified, deducts time and continues */ 
function checkAnswer(event) {
    var correctAnswer = questionAnswerArray[question][5];
    if(event.target.id === correctAnswer) {
        feedback.textContent = "Correct!";
        setTimeout(clearFeedback, 2000);
        score = score + 5;
        quizScore.textContent = "Score: " + score;
        question++;
        loadQuestions();
    } else {
        feedback.textContent = "Wrong";
        setTimeout(clearFeedback, 2000);
        countdownTimer = countdownTimer - 5;
        question++;
        loadQuestions();
    }
}
//add event listener for answer buttons child of new div
answerButtons.addEventListener("click", checkAnswer);


function getHighscores() {
    var storedHighscore = JSON.parse(localStorage.getItem("highscore"));
    if (storedHighscore === null) {
        return [];
    }
    return storedHighscore;
}

function renderHighscores() {
    var highscoreList = document.getElementById("highscoreList");
    var storedHighscores = getHighscores();
    storedHighscores.forEach(function (gameScore) {
        highscoreList.textContent += gameScore.initials + "-" + gameScore.score + ";       ";
    });
    
}

function postHighscores(event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    var newHighscore = {
        initials: initials,
        score: score,
    };
    var storedHighscores = getHighscores();
    storedHighscores.unshift(newHighscore);
    localStorage.setItem("highscore", JSON.stringify(storedHighscores));
    renderHighscores();
}


//add event listener for submit button for form
scoreForm.addEventListener("submit", postHighscores);

/* offer to add initials with score to save in local storage */
function scoreboard() {
    highScores.textContent = "High Scoreboard";
    scoreboardDirections.textContent = "Enter your initials if you want to save your score.";

}

//End the game
function endTheGame() {
    quizTimer.textContent = "";
        quizQuestion.textContent = "";
        answerButtons.textContent = "";
        gameOver.textContent = "Game Over!!!";
        scoreboard();
}

/* Post first question*/ 
function loadQuestions() {
    if(question === questionAnswerArray.length) {
        score = score + countdownTimer;
        quizScore.textContent = "Score: " + score;
        clearInterval(timer);
        endTheGame();
    } else {
        quizQuestion.textContent = questionAnswerArray[question][0];
        answerA.textContent = questionAnswerArray[question][1];
        answerB.textContent = questionAnswerArray[question][2];
        answerC.textContent = questionAnswerArray[question][3];
        answerD.textContent = questionAnswerArray[question][4];
        
    }
    
}

/* offer to play again to try to beat your score */
