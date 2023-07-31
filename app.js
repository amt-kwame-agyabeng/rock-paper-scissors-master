const choiceDiv = document.querySelector('.player-choice')
const choices = document.querySelectorAll('.choice')
const game = document.querySelector('.game')
const gameResults = document.querySelectorAll('.game_pick')
const gameWinner = document.querySelector('.game_winner')
const gameWinnerText = document.querySelector('#game_text')
const scores = document.querySelector('#score-num')
const playAgain = document.querySelector('.play-again')


let score = 0;


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
]
 
//game play
choices.forEach(choices =>{
  choices.addEventListener('click', () => {
    const choiceName = choices.dataset.choice;
    const choice = picks.find(choice => choice.name === choiceName);
    choose(choice)
  })
})

function choose(choice){
  const computerChoice = computerChoose();
  displayResults([choice,computerChoice]);
  displayWinner([choice,computerChoice]);
}

function computerChoose(){
  const rand = Math.floor(Math.random()*picks.length)
  return picks[rand];
}

function displayResults(results){
  gameResults.forEach((game, idx)=>{
  setTimeout(() => {
    game.innerHTML =`<div class = "choice ${results[idx].name}">
    <img src = "images/icon-${results[idx].name}.svg" >
    </div>
    `;
    
  },idx*2000);
  })

  choiceDiv.classList.toggle('hidden')
  game.classList.toggle('hidden')
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

function updateScore(point){
  score += point
  scores.innerText = score;

}

function isWinner(results) {
 return results[0].beats === results[1].name;
}

//Restart game
playAgain.addEventListener('click', () => {
  choiceDiv.classList.toggle('hidden');
  game.classList.toggle('hidden');

  gameResults.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove('winner');
  });

  gameWinnerText.innerText = "";
  gameWinner.classList.toggle('hidden');
  game.classList.toggle('show-winner');
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



