document.addEventListener("DOMContentLoaded", () => {
const modal = document.querySelector(".modal");
const rules = document.querySelector(".rulesBtn");
const closeButton = document.querySelector(".close-button");





//Hide or show rules
function toggleModal() {
    modal.classList.toggle("show-modal");
}


rules.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);


});



