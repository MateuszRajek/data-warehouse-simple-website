const btnBurger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");

btnBurger.addEventListener("click", function () {
    menu.classList.toggle("on");
    bars.classList.toggle("switcher");
    times.classList.toggle("switcher");
})