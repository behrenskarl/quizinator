var statusSpan = document.querySelector("#status");
var secondsDisplay = document.querySelector("#seconds");


var totalSeconds = 75;
var timeElapsed = 0;
var status = "Begin!";

function formattedSeconds() {

    var secondsLeft = totalSeconds - timeElapsed;
    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}

function beginCount() {
    var seconds; 
    if (status === "Begin!") {
        seconds = totalSeconds;
    }

}

// This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    
    secondsDisplay.textContent = getFormattedSeconds();
  
   // ..and then checks to see if the time has run out
    if (secondsElapsed <= 0) {
        alert("Times Up!")
  
        stopTimer();
    }
  }