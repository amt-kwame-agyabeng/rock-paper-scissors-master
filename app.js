const choices =[
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
const choiceButtons = document.querySelectorAll('.pick-btn');
const choiceDiv = document.querySelector('.player-choice')
const gameDiv = document.querySelector('.game')
const gamePick = document.querySelectorAll('.game_pick')

const gameWinner = document.querySelector('.game_winner')
const gameWinnerText = document.querySelector('.game_text')



 //game logic
 choiceButtons.forEach(button =>{
    button.addEventListener('click',() => {
        const choiceName = button.dataset.choice;
        const choice = choices.find(choice => choice.name === choiceName);
        choose(choice)

    });
 });
 
 function choose(choice){
    const computerChoice = computerChoose();
    displayResults([choice,computerChoice]);
    displayWinner([choice,computerChoice]);
 }

 function computerChoose(){
    const rand = Math.floor(Math.random()* choices.length);
    return choices[rand]
 }

 function displayResults(results){
    gamePick.forEach((gameDiv, idx) => {
        setTimeout(() => {
            gameDiv.innerHTML = `
            <div class = "choice ${results[idx].name}">
            <img src = "images/icon-${results[idx].name}.svg" >
            </div>
            `


        }, idx*1000)
    
    });
    
    choiceDiv.classList.toggle('hidden');
    gameDiv.classList.toggle('hidden');
 }
 
function displayWinner(results){
    setTimeout(() => {
       const userWins = isWinner(results) 
       const computerWins = isWinner(results.reverse())
       if (userWins) {
        gameWinnerText.innerText ="YOU WIN"
        
       }else if(computerWins){
        gameWinnerText.innerText ="YOU LOSE"
       
        
       }else{
        gameWinnerText.innerText ="DRAW"
       }

       gameWinner.classList.toggle('hidden');
       gameDiv.classList.toogle('show-winner');
       

    },5000);

    
}

function isWinner(results) {
    return results[0].beats === results[1].name;
  }


    
    
    const modal = document.querySelector(".modal");
    const rules = document.querySelector(".rulesBtn");
    const closeButton = document.querySelector(".close-button");
    
    //Hide or show rules modal
    function toggleModal(){
        modal.classList.toggle("show-modal");
    }
    
    rules.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);


  
















