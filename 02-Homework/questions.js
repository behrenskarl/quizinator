
var start = document.getElementById("start-button");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var progress = document.getElementById("progress");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var statusSpan = document.querySelector("#status");
var secondsDisplay = document.querySelector("#seconds");
var startButton = document.querySelector("#start-button");

start.addEventListener("click", startQuiz);


var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choiceA: "strings",
      choiceB: "Booleans",
      choiceC: "alerts",
      choiceD: "numbers",
      answer: "C"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choiceA: "quotes",
      choiceB: "curly brackets",
      choiceC: "parentheses",
      choiceD: "square brackets",
      answer: "C"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      choiceA: "onclick",
      choiceB: "onmouseclick",
      choiceC: "onfunction",
      choiceD: "click",
      answer: "A"
    },
    {
      question: "How do you declare a JavaScript variable?",
      choiceA: "variable carName;",
      choiceB: "var carName;",
      choiceC: "carname; var",
      choiceD: "var Carname:",
      answer: "B"
    },
    {
      question: "How to do you create a function in JavaScript?",
      choiceA: "function myFunction()",
      choiceB: "function = myFunction()",
      choiceC: "var function = _____",
      choiceD: "All of the above",
      answer: "A"
    }
];

function startQuiz() {
    // scoreDiv.style.display = "none";
    start.style.display = "none";
    renderQuestions();  
    quiz.style.display = "block";
    runTimer();
    // renderProgress();
    renderQCounter();
}
//Timer variable and interval loop for timer
var totalSeconds = 75;
var secondsElapsed = 0;

// var timer = setInterval(runTimer(), 1000);
function runTimer() {
    var timer = setInterval(function() {
        if (totalSeconds === 0) {
        clearInterval(timer);
        alert("Time's Up!");
        scoreRender();
        }
        
        totalSeconds--;
        secondsDisplay.textContent = this.totalSeconds;
        
    }, 1000);
}

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var qCount = 0;
var questionNumber = 4;
var score = 0;


function renderQuestions() {
    // document.getElementById("question").style.backgroundColor = "none";
    // totalSeconds = 15;
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderProgress() {
    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
      progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function renderQCounter(){
    if(qCount <= questionNumber){
        // counter.innerHTML = qCount;
        qCount++;
    }else{
        qCount = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestions();
        }else{
            stopQuiz();
            // scoreRender();
        }
        console.log("this is working");
    }
}



function checkAnswer(answer) {
    if (answer == questions[runningQuestion].answer) {
      answerIsCorrect();
      score++;
    } else {
      answerIsWrong(); 
    }
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestions();
    }else{
        // end the quiz and show the score
        stopQuiz();
        // scoreRender();
    }
}



function answerIsCorrect() {
    document.getElementById("question").style.backgroundColor = "#0f0";
    secondsElapsed + 15;
}
  //change wrong answer to red
function answerIsWrong() {
    document.getElementById("question").style.backgroundColor = "#f00";
    secondsElapsed + 15;
    
}

function stopQuiz() {
    if (secondsElapsed >= 0) {
        quiz.style.display = "none";
        start.style.display = "initial";
        totalSeconds = 0;
        scoreRender();
    }    
}



//scoreboard variables and functions
// var scoreboard = {
//     score = 0,
//     history = []
// }
var history = [];
  
function scoreRender() {
    localStorage.setItem("scoreContainer", JSON.stringify(history));
    scoreDiv.style.display = "block";
    var scorePercent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML += "<p>"+ scorePercent +"%</p>"; 
    // secondsElapsed = 0;
    // totalSeconds = 75;
} 


// function scoreRender() {
//     var scoreValue = scoreboard.score + qCount;
//     scoreDiv.style.display = "block";
//     scoreDiv.textContent = scoreboard.history.length;
  
//     history.pushState({score: scoreValue, qCount: 5});
// }
