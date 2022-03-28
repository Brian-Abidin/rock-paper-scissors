let word = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => word[Math.floor(Math.random()*word.length)]; // create a function that randomly returns 1 out of 3 variables, rock, paper, or scissors
/* function userPlay(){
  let userinput = prompt('Rock, Paper, or Scissors?'); // prompt user for input of rock, paper, or scissors
  if(userinput === ''){
    return false;
  }
  let choice = userinput[0].toUpperCase() + userinput.slice(1).toLowerCase(); // make user input case-insensitive
  if(choice === 'Rock' || choice === 'Paper' || choice === 'Scissors'){
    console.log(choice);
    return choice;
  } else {
    return false;
  }
  return choice; // return user input choice
} */ 
function playRound(playerSelection, computerSelection){ // create function takes 2 parameters of user input RPS vs Computer RPS
while(playerSelection) { 
  if (playerSelection === 'Rock' && computerSelection === 'Paper'){ // create if statements comparing all outcomes of RPS for computer and User
    console.log("You Lose! " + computerSelection + " beats " + playerSelection); // return the winner using a string "win/lose x beats y"
    return 0; //returns false if lose
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
    console.log("You Lose! " + computerSelection + " beats " + playerSelection); 
    return 0;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);          
    return 0;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
    console.log("You Win! " + playerSelection + " beats " + computerSelection);       
    return 1; //returns true if win
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
    console.log("You Win! " + playerSelection + " beats " + computerSelection);      
    return 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
    console.log("You Win! " + playerSelection + " beats " + computerSelection);      
    return 1;
  } else {
    console.log("It's a Draw.");
    return;
  } 
}
console.log("For not entering Rock, Paper, or Scissors, you lose.");
return 0;
}
/*
 function game(){ // create function called game
  let win = 0;
  let lose = 0;
  for (let i = 0; i < 5; i++){ // game function loops 5 times and returns a winner each loop
    const playerSelection = userPlay();
    const computerSelection = computerPlay(word);
    let outcome = playRound(playerSelection, computerSelection); // call playRound inside new function
    if(outcome === 1){
      win++;
      console.log("Wins:" + win + " Losses:" + lose)
    } else if(outcome === 0){ 
      lose++;
      console.log("Losses:" + lose + " Wins:" + win)
    } else{
    }
  } 
  if(win>lose){
    console.log("You Win! " + "Won:" + win + " Lost:" + lose);
  } else if(win === lose){
    console.log("It's a Draw! " + "Won:" + win + " Lost:" + lose);
  } else{
    console.log("You Lost! " + "Won:" + win + " Lost:" + lose);
  }
} */
// game();
const rock = document.querySelector('#rock'); //selecting first id of rock in html
  rock.addEventListener('click', () => { 
    let playerSelection = document.querySelector('#rock').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
    console.log(playerSelection);
}); 

const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    let playerSelection = document.querySelector('#paper').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
    console.log(playerSelection);
}); 

const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    let playerSelection = document.querySelector('#scissors').textContent;
    let computerSelection = computerPlay(word);
    playRound(playerSelection,computerSelection);
    console.log(playerSelection);
}); 