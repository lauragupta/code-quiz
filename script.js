/* set variable for timer */ 
/*var countdownTimer = "Time remaining : " + timer; */
var timeRemaining = document.getElementById("quizTimer");
/* set variable for score */ 
var currentScore = document.getElementById("quizScore");

var countdownTimer = 15

/* click starts the quiz and quiz timer */ 
document.getElementById("start-button").addEventListener("click", timer)
/* timer function */
    var timer = setInterval(function () {
            timeRemaining.textContent = "Time remaining: " + countdownTimer;
            countdownTimer --;
            if(countdownTimer === 0) {
                clearInterval(timer);
                timeRemaining.textContent = ""
        }
    }, 1000);


/* first question posts */ 

/* correct answer  and points and continues */ 
/* incorrect answer deducts time and continues */ 


/*second question posts */ 

/* correct answer  and points and continues */ 
/*incorrect answer deducts time and continues */ 


/*third question posts */ 

/* correct answer  and points and continues */ 
/*incorrect answer deducts time and continues */ 


/*fourth question posts */ 

/* correct answer  and points and continues */
/*incorrect answer deducts time and continues */


/*fifth question posts */

/* correct answer  and points and continues */
/*incorrect answer deducts time and continues */


/* timer goes off alert */

/* configure score combo of time left and correct answers */

/* show score */

/* offer to add initials with score to save in local storage */

/* offer to play again to try to beat your score */
