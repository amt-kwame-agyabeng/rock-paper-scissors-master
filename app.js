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
const choiceDiv = document.querySelector('.choice')
const gameDiv = document.querySelector('.game')
const gamePick = document.querySelectorAll('.game_pick')

 //game logic
 choiceButtons.forEach(button =>{
    button.addEventListener('click',() => {
        const choiceName = button.dataset.choice;
        const choice = choices.find(choice => choice.name === choiceName)
        choose(choice)

    })
 }) 
 
 function choose(choice){
    const computerChoice = computerChoose()
    displayResults([choice,computerChoice])

 }
 function computerChoose(){
    const rand = Math.floor(Math.random()* choices.length)
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


        }, idx*2000)

    });


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
  
















