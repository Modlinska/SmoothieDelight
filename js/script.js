document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("navIcon");
    const nav = document.querySelector('nav');

    navIcon.addEventListener("click", function (event) {
        this.classList.toggle('open')
        nav.classList.toggle('showNav');
    })



});