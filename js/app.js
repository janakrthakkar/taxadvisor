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

//intro
const tl = gsap.timeline({ defaults: { ease: "power1.Inout" } });

tl.to(".intro-text", { y: "0%", duration: 1, stagger: 0.4 });
tl.to(".intro-slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
