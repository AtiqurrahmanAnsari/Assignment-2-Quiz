var readlineSync = require("readline-sync");
var score = 0;

var questions = [{

  question: "Where does he live? ",
  answer :  "mumbai"
  
},{
   question: "What is his house name? ",
  answer :   "mannat" 
},{
  question: "What is his higher Qualification? ",
  answer :  "phd"
 
},{
  question: "What sports he like to do? ",
  answer :  "cricket" 
},{
  question: "What is his fav car? ",
  answer :  "bmw" 
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");
  console.log("\n");
  console.log("Welcome "+ userName + " Do You know Shah Rukh Khan");
  console.log("\n");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    
    score = score + 1;
   
  
    
  } else {
    console.log("wrong!");
   
   
  }
  
  
  console.log("current score: " + score);
  console.log("\n");
  

}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
    
  }
  console.log("The Final Score is "  + score);
}

welcome();
game();



