const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("header__nav");
const navClose = document.getElementById("nav-close");
const heroNavText = document.getElementById("hero__nav-text");

// show nav
navBtn.addEventListener("click", () => {
  nav.classList.add("showNav");
  heroNavText.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  nav.classList.remove("showNav");
});
