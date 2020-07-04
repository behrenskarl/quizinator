//html variables that link to class IDs
var start = document.getElementById("start-button")
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
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
      question : "Commonly used data types DO NOT include:",
      choiceA : "strings",
      choiceB : "Booleans",
      choiceC : "alerts",
      choiceD : "numbers",
      answer : "alerts"
    },
    {
      question : "The condition in an if / else statement is enclosed within ____.",
      choiceA : "quotes", 
      choiceB : "curly brackets", 
      choiceC : "parentheses", 
      choiceD : "square brackets",
      answer : "parentheses"
    },
    {
        question : "Which event occurs when the user clicks on an HTML element?",
        choiceA : "onclick", 
        choiceB : "onmouseclick", 
        choiceC : "onfunction", 
        choiceD : "click",
        answer : "onclick"
    },
    {
        question : "How do you declare a JavaScript variable?",
        choiceA : "variable carName;", 
        choiceB : "var carName;", 
        choiceC : "carname; var", 
        choiceD : "var Carname:",
        answer : "var carName;"
    },
    {
        question : "How to do you create a function in JavaScript?",
        choiceA : "function myFunction()", 
        choiceB : "function = myFunction()", 
        choiceC : "var function = _____", 
        choiceD : "All of the above",
        answer : "function myFunction()"
    }
];
//timer variables
var totalSeconds = 75;
var timeElapsed = 0;
var score = 0;
var secondsLeft = totalSeconds - score - timeElapsed;
var interval;
//question variables
var lastQuestion = question.length - 1;
var runningQuestion = 0;

//puts the question text from the array into the html
function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//event listener and start quiz function kicks the whole thing off
start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    startTimer();

}
//progress of which question you're on
function renderProgress() {
    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
//function to check answers if they match the correct answer in the array
function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
       answerCorrect(); 
    }
    else {
        answerWrong();
        score + 15;
    }
    renderTime();
}

//change correct answer to green
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
//change wrong answer to red
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}



//REJECTED HELL OF CODE I CANT GET TO WORK RIGHT
//formats timer
function getFormattedSeconds() {
    
    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }
}

// This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    
    secondsDisplay.textContent = getFormattedSeconds();
  
   // checks to see if timer ran out
    if (secondsLeft = 0) {
        alert("Times Up!")
  
        stopTimer();
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
    else (secondsLeft = 0); {
        stopTimer;
    }
}

//stop timer
function stopTimer() {
    secondsLeft = 0;
    renderTime();
}



startButton.addEventListener("click", startTimer);