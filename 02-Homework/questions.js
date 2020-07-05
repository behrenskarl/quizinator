// Questions for quiz
// $("#radio").prepend("<br><hr>" + questions);
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
// scoreDiv.addEventListener("click");

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
      choiceC: "parentheses",
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

function startQuiz() {
    // scoreDiv.style.display = "none";
    start.style.display = "none";
    renderQuestions();  
    quiz.style.display = "block";
    runTimer();
    renderQCounter();
}

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var qCount = 0;


function renderQuestions() {
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
    if(qCount <= questionTime){
        counter.innerHTML = qCount;
        qCount++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestions();
        }else{
            // end the quiz and show the score
            clearInterval(timer);
            scoreRender();
        }
    }
}


function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
      answerIsCorrect();
      scoreboard.score += 100;
    } else {
      answerIsWrong(); 
    }
    qCount = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestions();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}



function answerIsCorrect() {
    document.getElementById("question").style.backgroundColor = "#0f0";
}
  //change wrong answer to red
function answerIsWrong() {
    document.getElementById("question").style.backgroundColor = "#f00";
}


//Timer variable and interval loop for timer
var totalSeconds = 75;

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


//scoreboard variables and functions
var scoreboard = {
    score: 0,
    currentQuestion: 1,
    history: [],
  };
  
function scoreRender() {
    scoreDiv.style.display = "block";
    scoreDiv.textContent = scoreboard.history.length;
  
    history.pushState({score: scoreValue, qCount: 5});
}
