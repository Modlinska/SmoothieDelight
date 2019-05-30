document.addEventListener("DOMContentLoaded", function () {
    var navIcon = document.getElementById("navIcon");
    var nav = document.querySelector('nav');
    var btnrght1 = document.querySelectorAll(".smoothieSlider1 .toRight");
    var btnrght2 = document.querySelectorAll(".smoothieSlider2 .toRight");
    var btnrght3 = document.querySelectorAll(".smoothieSlider3 .toRight");
    var btnleft1 = document.querySelectorAll(".smoothieSlider1 .toLeft");
    var btnleft2 = document.querySelectorAll(".smoothieSlider2 .toLeft");
    var btnleft3 = document.querySelectorAll(".smoothieSlider3 .toLeft");
    var allSlider1Items = document.querySelectorAll(".smoothieSlider1 .smoothieSliderItem");
    var allSlider2Items = document.querySelectorAll(".smoothieSlider2 .smoothieSliderItem");
    var allSlider3Items = document.querySelectorAll(".smoothieSlider3 .smoothieSliderItem");
    var submitbtn = document.querySelector(".newsletterForm button");
    var newsletterForm = document.querySelector(".newsletterForm");
    var newsletterInput = document.querySelector(".newsletterForm input");

    navIcon.addEventListener("click", function (event) {
        this.classList.toggle('open');
        nav.classList.toggle('showNav');
    });

    var index = 0;
    allSlider1Items[index].classList.add("visible");
    allSlider2Items[index].classList.add("visible");
    allSlider3Items[index].classList.add("visible");

    for (var i = 0; i < btnrght1.length; i++) {

        btnrght1[i].addEventListener('click', function (event) {
            allSlider1Items[index].classList.remove('visible')
            index = index + 1;
            if (index >= allSlider1Items.length) {
                index = 0;
            }
            allSlider1Items[index].classList.add('visible');
        });
    }
    for (var i = 0; i < btnleft1.length; i++) {

        btnleft1[i].addEventListener('click', function () {

            allSlider1Items[index].classList.remove('visible');
            index = index - 1;
            if (index < 0) {
                index = allSlider1Items.length - 1;
            }
            allSlider1Items[index].classList.add('visible');
        });
    }

    for (var i = 0; i < btnrght2.length; i++) {

        btnrght2[i].addEventListener('click', function (event) {

            allSlider2Items[index].classList.remove('visible');
            index = index + 1;
            if (index >= allSlider2Items.length) {
                index = 0;
            }
            allSlider2Items[index].classList.add('visible');

        });
    }
    for (var i = 0; i < btnleft2.length; i++) {

        btnleft2[i].addEventListener('click', function () {

            allSlider2Items[index].classList.remove('visible');
            index = index - 1;
            if (index < 0) {
                index = allSlider2Items.length - 1;
            }
            allSlider2Items[index].classList.add('visible');
        });
    }

    for (var i = 0; i < btnrght3.length; i++) {

        btnrght3[i].addEventListener('click', function (event) {

            allSlider3Items[index].classList.remove('visible');
            index = index + 1;
            if (index >= allSlider3Items.length) {
                index = 0;
            }
            allSlider3Items[index].classList.add('visible');

        });
    }
    for (var i = 0; i < btnleft3.length; i++) {

        btnleft3[i].addEventListener('click', function () {

            allSlider3Items[index].classList.remove('visible');
            index = index - 1;
            if (index < 0) {
                index = allSlider3Items.length - 1;
            }
            allSlider3Items[index].classList.add('visible');
        });
    }
// walidacja e-maila
    submitbtn.addEventListener('click', function (event) {
        event.preventDefault();

    });

    // var slider = tns({
    //     container: '.my-slider',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: true,
    //     nav: false,
    //     autoplayButtonOutput: false
    // });

});



