let userScore = 0;
let compScore =0;
let draws = 0;
let rounds = 0;

let userScoreElement = document.querySelector("#user-score");
let compScoreElement = document.querySelector("#comp-score");
let drawElement = document.querySelector("#num-draws");
let roundElement = document.querySelector("#num-rounds");
let statusTextElement = document.querySelector("#status-text");
let resetButtonElement = document.querySelector("#reset-btn");

let resetVisible = function () {
  if (userScore > 0 || compScore > 0) {
    resetButtonElement.setAttribute("style","visibility:visible;");
  }
  else {
    resetButtonElement.setAttribute("style","visibility:hidden;");
  }
}

let rollRock = function () {
  let userChoice = 0;
  let compChoice =Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. It's a draw.";
      let outcome = 2;
      incrementScore(outcome);
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. You lose!";
       outcome = 0;
      incrementScore(outcome);
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. You win!";
      let outcome = 1;
      incrementScore(outcome);
    }
  };

  let rollPaper = function () {
    let userChoice = 0;
    let compChoice =Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. You win!";
      let outcome = 1;
      incrementScore(outcome);
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. It's a draw.";
      let outcome = 2;
      incrementScore(outcome);
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. You lose!";
      let outcome = 0;
      incrementScore(outcome);
    }
  };


  let rollScissors = function () {
    let userChoice = 0;
    let compChoice =Math.floor(Math.random() * 3);
    console.log("Computer choice is "+compChoice);

    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. You lose!";
      let outcome = 0;
      incrementScore(outcome);
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. You win!";
      let outcome = 1;
      incrementScore(outcome);
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. It's a draw.";
      let outcome = 2;
      incrementScore(outcome);
    }
  };


let incrementScore = function(outcome) {
  if (outcome===1) {
    userScore++;
  }
  else if (outcome===0){
    compScore ++;
  }
  else {
    draws ++;
  }
  rounds ++;
  roundElement.innerHTML=rounds;
  drawElement.innerHTML=draws;
  resetVisible()
  userScoreElement.innerHTML=userScore;
  compScoreElement.innerHTML=compScore;
};

let reset = function() {
    userScore = 0;
    compScore = 0;
    rounds = 0;
    draws = 0;
    resetVisible()
    statusTextElement.innerHTML = "Welcome! Pick your weapon.";
    userScoreElement.innerHTML=userScore;
    compScoreElement.innerHTML=compScore;
    roundElement.innerHTML=rounds;
    drawElement.innerHTML=draws;
};

document.querySelector('#choice-rock').addEventListener('click',rollRock);
document.querySelector('#choice-paper').addEventListener('click',rollPaper);
document.querySelector('#choice-scissors').addEventListener('click',rollScissors);
document.querySelector('#reset-btn').addEventListener('click',reset);
