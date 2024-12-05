// setup nav
// const navBtn = document.getElementById("nav-btn");
// const divider = document.getElementById("divider");
// const form = document.getElementById("form");
// const nav = document.getElementById("hero__nav");
// const navClose = document.getElementById("nav-close");

// show nav
// navBtn.addEventListener("click", () => {
//   nav.classList.add("showNav");
//   form.style.display = "none";
//   divider.style.display = "none";
// });
// close nav
// navClose.addEventListener("click", () => {
//   nav.classList.remove("showNav");
// });
// setup nav
const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("header__nav");
const navClose = document.getElementById("nav-close");
const heroNavText = document.getElementById("hero__nav-text");

// show nav
navBtn.addEventListener("click", () => {
  console.log("Next");
  nav.classList.add("showNav");
  heroNavText.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  nav.classList.remove("showNav");
});
