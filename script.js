const burger = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".mobile__nav");
burger.addEventListener("click", () => {
    burger.classList.toggle("open")
    mobileNav.classList.toggle("open")
});