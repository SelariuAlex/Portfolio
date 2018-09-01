let navBtn = document.querySelector(".navbtn");
let navLinks = document.querySelector(".nav__links");

navBtn.addEventListener("click", showNav);

function showNav() {
  navLinks.classList.toggle("display");
}
