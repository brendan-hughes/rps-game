var userScore = 0;
var compScore =0;
var userScoreElement = document.querySelector("#user-score");
var compScoreElement = document.querySelector("#comp-score");
var statusTextElement = document.querySelector("#status-text");
var resetButtonElement = document.querySelector("#reset-btn");

let resetVisible = function () {
  if (userScore > 0 || compScore > 0) {
    resetButtonElement.setAttribute("style","visibility:visible;");
  }
  else {
    resetButtonElement.setAttribute("style","visibility:hidden;");
  }
}

let rollRock = function () {
  var userChoice = 0;
  var compChoice =Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. It's a draw.";
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. You lose!";
      var winner = false;
      incrementScore(winner);
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. You win!";
      var winner = true;
      incrementScore(winner);
    }
  };

  let rollPaper = function () {
    var userChoice = 0;
    var compChoice =Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. You win!";
      var winner = true;
      incrementScore(winner);
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. It's a draw.";
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. You lose!";
      var winner = false;
      incrementScore(winner);
    }
  };


  let rollScissors = function () {
    var userChoice = 0;
    var compChoice =Math.floor(Math.random() * 3);
    console.log("Computer choice is "+compChoice);

    if (compChoice === 0) {
      statusTextElement.innerHTML = "Computer picked rock. You lose!";
      var winner = false;
      incrementScore(winner);
    }
    else if (compChoice === 1) {
      statusTextElement.innerHTML = "Computer picked paper. You win!";
      var winner = true;
      incrementScore(winner);
    }
    else {
      statusTextElement.innerHTML = "Computer picked scissors. It's a draw.";
    }
  };


let incrementScore = function(winner) {
  if (winner) {
    userScore++;
  }
  else {
    compScore ++;
  }
  resetVisible()
  userScoreElement.innerHTML=userScore;
  compScoreElement.innerHTML=compScore;
};

let reset = function() {
    userScore = 0;
    compScore = 0;
    resetVisible()
    statusTextElement.innerHTML = "Welcome! Pick your weapon.";
    userScoreElement.innerHTML=userScore;
    compScoreElement.innerHTML=compScore;
};

document.querySelector('#choice-rock').addEventListener('click',rollRock);
document.querySelector('#choice-paper').addEventListener('click',rollPaper);
document.querySelector('#choice-scissors').addEventListener('click',rollScissors);
document.querySelector('#reset-btn').addEventListener('click',reset);
