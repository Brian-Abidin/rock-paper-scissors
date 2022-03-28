let word = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => word[Math.floor(Math.random()*word.length)]; // create a function that randomly returns 1 out of 3 variables, rock, paper, or scissors
let win = 0;
let loss = 0;

function playRound(playerSelection, computerSelection){ // create function takes 2 parameters of user input RPS vs Computer RPS
  const round = document.querySelector('#round');
  while(playerSelection) { 
    if(win === 5 || loss === 5) break;
     else {
      if (playerSelection === 'Rock' && computerSelection === 'Paper'){ // create if statements comparing all outcomes of RPS for computer and User
        loss +=1;
        document.getElementById("loss").textContent = loss;
        if(loss === 5) break;
        round.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + "!"; // return the winner using a string "win/lose x beats y"
        return 0; //returns false if lose
      } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        loss +=1;
        document.getElementById("loss").textContent = loss;
        if(loss === 5) break;
        round.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
        return 0;
      } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        loss +=1;
        document.getElementById("loss").textContent = loss;
        if(loss === 5) break;
        round.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
        return 0;
      } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        win +=1;
        document.getElementById("win").textContent = win;
        if(win === 5) break;
        round.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        return 1; //returns true if win
      } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        win +=1;
        document.getElementById("win").textContent = win;
        if(win === 5) break;
        round.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "!"; 
        return 1;
      } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        win +=1;
        document.getElementById("win").textContent = win;
        if(win === 5) break;
        round.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "!"; 
        return 1;
      } else {
        round.textContent = "It's a Draw.";
        return;
      }  
    }
  }
  if(win === 5){
    round.textContent = "You're the Rock, Paper, Scissors champion!";
    }else if(loss === 5){
    round.textContent = "Better luck next time...";
  }
} 
const rock = document.querySelector('#rock'); //selecting first id of rock in html
  rock.addEventListener('click', () => { 
    let playerSelection = document.querySelector('#rock').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
}); 

const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    let playerSelection = document.querySelector('#paper').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
}); 

const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    let playerSelection = document.querySelector('#scissors').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
}); 