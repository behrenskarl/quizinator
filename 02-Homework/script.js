//html variables that link to class IDs
var start = document.getElementById("start-button")
var quiz = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var statusSpan = document.querySelector("#status");
var secondsDisplay = document.querySelector("#seconds");
var startButton = document.querySelector("#start-button");

//questions and answers array
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choiceA: "strings",
      choiceB: "Booleans",
      choiceC: "alerts",
      choiceD: "numbers",
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choiceA: "quotes", 
      choiceB: "curly brackets", 
      choiceC : "parentheses", 
      choiceD: "square brackets",
      answer: "parentheses"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choiceA: "onclick", 
        choiceB: "onmouseclick", 
        choiceC: "onfunction", 
        choiceD: "click",
        answer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choiceA: "variable carName;", 
        choiceB: "var carName;", 
        choiceC: "carname; var", 
        choiceD: "var Carname:",
        answer: "var carName;"
    },
    {
        question: "How to do you create a function in JavaScript?",
        choiceA: "function myFunction()", 
        choiceB: "function = myFunction()", 
        choiceC: "var function = _____", 
        choiceD: "All of the above",
        answer: "function myFunction()"
    }
];
//timer variables
var totalSeconds = 75;
var timeElapsed = 0;
var status = "Begin!";
var interval;
//question variables
var lastQuestion = question.length - 1;
var runningQuesiton = 0;
var count = 75;

function renderQuesiton() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuesiton();
    quiz.style.display = "block";
    startTimer();
    beginCount();

}








//formats timer
function getFormattedSeconds() {

    var secondsLeft = totalSeconds - timeElapsed;
    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}
//function to get the timer to begin once button is clicked
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
  
   // checks to see if timer ran out
    if (timeElapsed >= totalSeconds) {
        alert("Times Up!")
  
        stopTimer();
        return;
    }
  }
//also attempt to get timer to start...
function startTimer() {
    if (totalSeconds > 0) {
        interval = setInterval(function() {
            timeElapsed++;

            renderTime();
        }, 1000);
    }    
    else (formattedSeconds <= 0); {
        stopTimer;
        return;
    
    }
}
function stopTimer() {
    timeElapsed >= 75;
    renderTime();
}



startButton.addEventListener("click", startTimer);