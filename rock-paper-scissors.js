let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 const userScorepara = document.querySelector("#user-score");
 const compScorepara = document.querySelector("#comp-score");

const genComChoice = () =>{
  const option = ["rock","paper","scissors"];
  const randIdx =Math.floor(Math.random()*3);
  return option[randIdx];
};

const drawGame = () => {
  console.log ("game was draw.");
  msg.innerText = "draw Play again!";
  msg.style.backgroundColor =" #081b31";
};

const showWinner = (userWin , userChoice,compChoice)=>{
  if(userWin){
    userScore++
    userScorepara.innerHTML = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
     compScore++
     compScorepara.innerHTML= compScore;
    msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";

}
}

const playGame = (userChoice) =>{
  console.log("user choice = ", userChoice);
  const  compChoice = genComChoice();
  console.log("comp choice = ", compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin =  true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice ==="paper"){
      userWin = compChoice === "scissors" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice,compChoice)
  }

}

choices.forEach((choice) =>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
   
    playGame(userChoice);
  })
})