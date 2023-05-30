const userPickChoice = (pick) => {
   console.log(pick);

   //hide current page
   let choice = document.querySelector(".choice");
   choice.style.display = "none";

   // shows the next page when you click on your choice
   let contest = document.querySelector(".contest");
   contest.style.display = "flex";

   //set the user pick
   
   
}
//Restart game
const newGame = () =>{
   let choice = document.querySelector(".choice");
   choice.style.display = "";

   let contest = document.querySelector(".contest");
   contest.style.display = "none";


}

 /*
 const housePick = () => {
   let pick = ['rock','paper','scissors']
   let housePick = pick[Math.floor(Math.random()*3)];

   document.getElementById('.icon-scissors').src

   return housePick;
}
*/


