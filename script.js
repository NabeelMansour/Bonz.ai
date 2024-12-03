// setup nav
const navBtn = document.getElementById("nav-btn");
const divider = document.getElementById("divider");
const form = document.getElementById("form");
const nav = document.getElementById("hero__nav");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  nav.classList.add("showNav");
  form.style.display = "none";
  divider.style.display = "none";
});
// close nav
navClose.addEventListener("click", () => {
  nav.classList.remove("showNav");
});
