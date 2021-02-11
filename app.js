const openElements = document.querySelectorAll('[data-open]');
const closeElements = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';

for(const element of openElements) {
    element.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add('is-visible');
    });
}

// for (const element of closeElements) {
//     element.addEventListener("click", function() {
//       this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//     });
// }

// document.addEventListener("click", e => {
//     if (e.target == document.querySelector(".modal.is-visible")) {
//       document.querySelector(".modal.is-visible").classList.remove(isVisible);
//     }
// });

// document.addEventListener("keyup", e => {
//     if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
//       document.querySelector(".modal.is-visible").classList.remove(isVisible);
//     }
// });