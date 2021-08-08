var readlineSync = require('readline-sync');
var score = 0

var highScorer = [
{
  name: "Nehal",
  score: 6
},
{
  name: "Kaustubh",
  score: 6
},
{
  name: "Tanmay",
  score: 5
}
];

var questions = [
      {
        question: `What is my age?
  a: 19
  b: 20
  c: 21
  d: 22\n` ,
        answer: "b"
      }, 
      {
        question: `Who is my favorite super hero?
  a: The Incredible Hulk
  b: Iron Man
  c: Super Man
  d: Bat Man\n`,
        answer: "b"
      },
      {
        question: `What is my favorite color?
  a: Red
  b: Black
  c: White
  d: All of the above\n`,
        answer: "d"
      },
      {
        question: `Which element used in the arc reactor was poisoning Tony?
  a: Gadolinium
  b: Promethium
  c: Rhodium
  d: Palladium\n`,
        answer: "d"
      },
      {
        question: `What was the name of the radiation that Steve Rogers was subjected to that transformed him into a super soldier?
  a: Delta ray
  b: Zeta ray
  c: Vita ray
  d: Theta ray\n`,
        answer: "c"
      },
      {
        question: `Which Avenger appears briefly in the movie Thor?
  a: Black Widow
  b: Bruce Banner
  c: Clint Barton
  d: Tony Stark\n`,
        answer: "c"
      },
      ];

var userName = readlineSync.question("Enter Your Name: ");
console.log("Welcome" + userName + " To Marvel Quiz ");
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}

function play(question, answer)
{
  var givenAns = readlineSync.question(question);
  if(answer === givenAns){
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