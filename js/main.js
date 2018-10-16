// navbar
let navBtn = document.querySelector(".navbtn");
let navLinks = document.querySelector(".nav__links");

navBtn.addEventListener("click", showNav);

function showNav() {
  navLinks.classList.toggle("display");
}

// preloader
window.addEventListener("load", function() {
  this.document.querySelector(".preloader").classList.add("hidePreloader");
});

// split screen

document.addEventListener("DOMContentLoaded", function() {
  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});
