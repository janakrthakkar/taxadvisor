//Mobile Nav
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let navItem = document.getElementsByClassName(".nav-item");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

function closeNav() {
  header.classList.remove("active");
}
