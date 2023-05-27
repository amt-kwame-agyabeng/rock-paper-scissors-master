const userPickChoice = (pick) => {
   console.log(pick);

   //hide current page
   let choice = document.querySelector(".choice");
   choice.style.display = "none";

   // shows the next page when you click on your choice
   let contest = document.querySelector(".contest");
   contest.style.display = "flex";
}