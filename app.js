//DOM
const choiceDiv = document.querySelector('.player-choice')
const choices = document.querySelectorAll('.choice')
const game = document.querySelector('.game')
const gameResults = document.querySelectorAll('.game_pick')
const gameWinner = document.querySelector('.game_winner')
const gameWinnerText = document.querySelector('#game_text')
const scores = document.querySelector('#score-num')
const playAgain = document.querySelector('.play-again')
const bonus = document.querySelector('.bonus-btn')
const bonusGame = document.querySelector('.logo-bonus')
const logo = document.querySelector('.logo')
const gameBonus = document.querySelector('.bonus-game')

let score = 0;
let bonusMode = false;


const picks = [
  {
    name: "paper",
    beats: "rock"
  },
  {
    name: "scissors",
    beats: "paper"
  },
  {
    name: "rock",
    beats: "scissors"
  },
];

const bonusPicks =[
  {
    name: "scissors",
    beats: ["paper", "lizard"],
  },
  {
    name: "paper",
    beats: ["rock", "spock"],
  },
  {
    name: "rock",
    beats: ["lizard","scissors"],
  },
  {
    name: "spock",
    beats: ["scissors", "lizard"],
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
  },
  
];
 
//game play
choices.forEach(choices =>{
  choices.addEventListener('click', () => {
    const choiceName = choices.dataset.choice;
    if(bonusMode) {
      const choice = bonusPicks.find(choice => choice.name === choiceName);
      chooseBonus(choice);
    }else {
     const choice = picks.find(choice => choice.name === choiceName)
     choose(choice) 
    }
   
  });
});

function choose(choice){
  const computerChoice = computerChoose();
  displayResults([choice,computerChoice]);
  displayWinner([choice,computerChoice]);
}
function chooseBonus(choice){
  const computerChoice = computerChooseBonus();
  displayResultsBonus([choice,computerChoice]);
  displayWinnerBonus([choice,computerChoice]);
}

function computerChoose(){
  const rand = Math.floor(Math.random()*picks.length)
  return picks[rand];
}
function computerChooseBonus(){
  const rand = Math.floor(Math.random()*bonusPicks.length)
  return bonusPicks[rand]
}
function displayResults(results){
  gameResults.forEach((game, idx)=>{
  setTimeout(() => {
    game.innerHTML =`<div class = "choice ${results[idx].name} ">
    <img src = "images/icon-${results[idx].name}.svg" >
    </div>
    `;
    
  },idx*2000);
  })

  choiceDiv.classList.toggle('hidden')
  game.classList.toggle('hidden')
}
function displayResultsBonus(results){
  gameResults.forEach((game, idx)=>{
  setTimeout(() => {
    game.innerHTML = `<div class = "choice ${results[idx].name}">
    <img src = "images/icon-${results[idx].name}.svg" >
    </div>
    `;
    
  },idx*3000);
  })

  gameBonus.classList.toggle('hidden');
  game.classList.toggle('hidden');
}

function displayWinner(results){
  setTimeout(() => {
    const userWins = isWinner(results)
    const computerWins = isWinner(results.reverse())
    if (userWins){
      gameWinnerText.innerText = "YOU WIN";
      updateScore(1)
      gameResults[0].classList.toggle('winner');

    }else if(computerWins){
      gameWinnerText.innerText = "YOU LOSE";
      updateScore(-1)
      gameResults[1].classList.toggle('winner')
      playAgain.style.color ="#DB2E4D";
    }else{
      gameWinnerText.innerText = "DRAW";
    }

    gameWinner.classList.toggle('hidden');
    game.classList.toggle('show-winnner')
  }, 5000);

  
}
function displayWinnerBonus(results){
  setTimeout(() => {
    const userWins = isWinnerBonus(results)

    if (userWins === true){
      gameWinnerText.innerText = "YOU WIN";
      updateScore(1)
      gameResults[0].classList.toggle('winner');
    }else if(userWins === false){
      gameWinnerText.innerText = "YOU LOSE";
      updateScore(-1)
      gameResults[1].classList.toggle('winner')
      playAgain.style.color ="#DB2E4D";
    }else{
      gameWinnerText.innerText = "DRAW";
    }

    gameWinner.classList.toggle('hidden');
    game.classList.toggle('show-winnner')
  }, 5000);


}
function resetScores(){
  score = 0
  scores.innerText = score;
} 

function updateScore(point){
  score += point
  scores.innerText = score;

//store the updated score in local storage
  localStorage.setItem("score", score)

}
//Check if score exists in local storage
const savedScore = localStorage.getItem("score")

if(savedScore !== null){
  score = parseInt(savedScore)
  scores.innerText = score;

}



function isWinner(results) {
 return results[0].beats === results[1].name;
}

function isWinnerBonus(results) {
  const userChoice = results[0];
  const computerChoice = results[1];

  if(userChoice.name === computerChoice.name) {
    return "draw";
  }
  else{
    return userChoice.beats[0] === computerChoice.name || userChoice.beats[1] === computerChoice.name
  };
 }
 


//Restart game
playAgain.addEventListener('click', () => {
  if(!bonusMode){
    choiceDiv.classList.toggle('hidden');
    game.classList.toggle('hidden');

  gameResults.forEach((game) => {
    game.innerHTML = "";
    game.classList.remove('winner');
  });

  gameWinnerText.innerText = "";
  gameWinner.classList.toggle('hidden');
  game.classList.toggle('show-winner');    
  }else if(bonusMode){
    gameBonus.classList.toggle('hidden')
    game.classList.toggle('hidden');
  
  gameResults.forEach((game) => {
    game.innerHTML = "";
    game.classList.remove('winner');
  });

  
  gameWinnerText.innerText = "";
  gameWinner.classList.toggle('hidden');
  game.classList.toggle('show-winner');

 }
  
});


bonus.addEventListener("click",() =>{
  resetScores ();

  bonusMode = !bonusMode;



  bonusGame.classList.toggle('hidden');
  logo.classList.toggle('hidden');

  
  gameResults.forEach((game) => {
    game.innerHTML = "";
    game.classList.remove('winner');
  });

  if(bonusMode){
    bonus.innerText = "NORMAL";
    
    choiceDiv.classList.add('hidden');
    gameBonus.classList.remove('hidden');
    game.classList.remove('show-winner');
    game.classList.add('hidden');
    gameWinner.classList.add('hidden');
  }else{
    bonus.innerText = "BONUS"
    choiceDiv.classList.remove('hidden');
    gameBonus.classList.add('hidden');
    game.classList.remove('show-winner');
    game.classList.add('hidden');
    gameWinner.classList.add('hidden');

  }
});


  const modal = document.querySelector(".modal");
  const rules = document.querySelector(".rulesBtn");
  const closeButton = document.querySelector(".close-button");
  
  //Hide or show rules modal
  function toggleModal(){
      modal.classList.toggle("show-modal");
  }
  
  rules.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);



