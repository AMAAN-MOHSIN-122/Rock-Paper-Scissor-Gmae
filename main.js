let userScore = document.getElementById('score');
let msg = document.getElementById('result');
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText="user Win";
    userScore.textContent++;
   console.log(userScore.textContent);
  } else{
    msg.innerText='computer wins';
  }
}
const gameDraw = () => {
    msg.innerText="The game has been Draw";
}
const playGame = (userChoice) => {
  console.log( 'user choice = ',userChoice);
  const genCompChoice=compChoice();
  console.log("comp choice = ",genCompChoice); 
  if(userChoice===genCompChoice){
    gameDraw();
  } else {
    let userWin = true;
    if(userChoice==="rock"){
      userWin = genCompChoice==="paper" ? false : true;
    } else if(userChoice==="paper"){
      userWin = genCompChoice==="scissor" ? false : true;
    } else {
      userWin = genCompChoice==="rock" ? false : true;
    }
    showWinner(userWin);
  }
}

const compChoice = () => {
  const options = ["rock", "paper", "scissor"]
  let randIndx = Math.floor(Math.random() * 3);
  return options[randIndx]
}

choices.forEach((choices) => {
  choices.addEventListener("click", () => {
    let userChoice = choices.getAttribute("id");
     playGame(userChoice);
  });
});