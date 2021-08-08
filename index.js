var readlineSync = require('readline-sync');
var score = 0

var highScorer = [
{
  name: "Nehal",
  score: 5
},
{
  name: "Kaustubh",
  score: 4
},
];

var questions = [
      {
        question: "Where do I live? ",
        answer: "Satose"
      },
      {
        question: `What is my age? ` ,
        answer: "20"
      }, 
      {
        question: `Who is my favorite super hero? `,
        answer: "Iron Man"
      },
      {
        question: `What is my favorite color? `,
        answer: "Red"
      },
      {
        question: `What is my nick name? `,
        answer: "Banty"
      }
      ];

var userName = readlineSync.question("Enter Your Name: ");
console.log("Welcome" + userName + " to DO YOU KNOW Nehal?");
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}

function play(question, answer)
{
  var givenAns = readlineSync.question(question);
  if(answer.toUpperCase() === givenAns.toUpperCase()){
    console.log("Yey, You are right!");
    score = score + 1;
  }
  else {
    console.log("Opps, you are wrong!");
  }
  console.log("Current Score: ",score);
  console.log("----------------------------------------------------");
}
console.log("********************************************************");
console.log("YAY! You SCORED: ",score+"/"+questions.length);
console.log("********************************************************");
console.log("Highest Scorer In this Quiz:");
if(score >= highScorer[0].score){
  console.log("Congratulation!, You Are Now Highest Scorer Of this Quiz.")
  console.log(userName,score);
  for(var i=0; i<highScorer.length; i++) { 
    console.log(highScorer[i].name,highScorer[i].score);
  }
  }else{
    for(var i=0; i<highScorer.length; i++) { 
      console.log(highScorer[i].name,highScorer[i].score);
    }
  }