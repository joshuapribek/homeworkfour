
var HighScore = document.querySelector("Highscore");
var scorecount = document.querySelector("scorecount");
var questionsection = document.querySelector("questions");
var buttonA = document.querySelector("buttonA");
var buttonB = document.querySelector("buttonB");
var buttonC = document.querySelector("buttonC");
var buttonD = document.querySelector("buttonD");
var choiceA = document.querySelector("choiceA");
var choiceB = document.querySelector("choiceB");
var choiceC = document.querySelector("choiceC");
var choiceD = document.querySelector("choiceD");
var Answers = document.querySelector("Answers");

var score = 0;

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

var questions = [
    {question: "What is 2 + 2?", choices: ["4", "6", "12", "56"], answer: "4"},
    {quesiton: "When did Columbus sail the ocean?", choices: ["1462", "1738", "1017", "1492"], answer: "1492"}
    {question: "What are the first three letters of the Alphabet?", choices: ["PDQ", "ABC", "XYZ", "WTF"], answer: "ABC"}
    {question: "Who is the greatest Goal Scorer in the modern NHL?", choices: ["Sydney Crosby", "Steven Stamkos", "Alexander Ovechkin", "Evngeny Kuznetsov"], answer: "Alexander Ovechkin"}
]


