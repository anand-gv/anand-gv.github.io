const countDownDate = new Date("Aug 22, 2026 18:30:00").getTime();

const x = setInterval(function () {

const now = new Date().getTime();

const distance = countDownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days +
" Days " +
hours +
" Hours " +
minutes +
" Minutes " +
seconds +
" Seconds";

if (distance < 0) {

clearInterval(x);

document.getElementById("countdown").innerHTML = "Welcome ❤️";

}

}, 1000);