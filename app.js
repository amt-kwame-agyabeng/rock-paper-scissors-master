document.addEventListener("DOMContentLoaded", () => {
const modal = document.querySelector(".modal");
const rules = document.querySelector(".rulesBtn");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
rules.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

});