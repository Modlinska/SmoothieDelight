document.addEventListener("DOMContentLoaded", function () {
    var navIcon = document.getElementById("navIcon");
    var nav = document.querySelector('nav');
    var btnrght1 = document.querySelector(".smoothieSlider1 .toRight");
    var btnrght2 = document.querySelector(".smoothieSlider2 .toRight");
    var btnrght3 = document.querySelector(".smoothieSlider3 .toRight");
    var btnleft1 = document.querySelector(".smoothieSlider1 .toLeft");
    var btnleft2 = document.querySelector(".smoothieSlider2 .toLeft");
    var btnleft3 = document.querySelector(".smoothieSlider3 .toLeft");
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

    var index1 = 0;
    var index2 = 0;
    var index3 = 0;

    allSlider1Items[index1].classList.add("visible");
    allSlider2Items[index2].classList.add("visible");
    allSlider3Items[index3].classList.add("visible");


//Slider for everyone

    btnrght1.addEventListener('click', function (event) {
        allSlider1Items[index1].classList.remove('visible')
        index1 = index1 + 1;
        if (index1 >= allSlider1Items.length) {
            index1 = 0;
        }
        allSlider1Items[index1].classList.add('visible');
    });

    btnleft1.addEventListener('click', function () {

        allSlider1Items[index1].classList.remove('visible');
        index1 = index1 - 1;
        if (index1 < 0) {
            index1 = allSlider1Items.length - 1;
        }
        allSlider1Items[index1].classList.add('visible');
    });

//Slider for lose weight

    btnrght2.addEventListener('click', function (event) {

        allSlider2Items[index2].classList.remove('visible');
        index2 = index2 + 1;
        if (index2 >= allSlider2Items.length) {
            index2 = 0;
        }
        allSlider2Items[index2].classList.add('visible');
    });

    btnleft2.addEventListener('click', function () {
        allSlider2Items[index2].classList.remove('visible');
        index2 = index2 - 1;
        if (index2 < 0) {
            index2 = allSlider2Items.length - 1;
        }
        allSlider2Items[index2].classList.add('visible');
    });

// Slider for muscle
    
    btnrght3.addEventListener('click', function (event) {

        allSlider3Items[index3].classList.remove('visible');
        index3 = index3 + 1;
        if (index3 >= allSlider3Items.length) {
            index3 = 0;
        }
        allSlider3Items[index3].classList.add('visible');

    });

    btnleft3.addEventListener('click', function () {

        allSlider3Items[index3].classList.remove('visible');
        index3 = index3 - 1;
        if (index3 < 0) {
            index3 = allSlider3Items.length - 1;
        }
        allSlider3Items[index3].classList.add('visible');
    });

// E-mail validation
    var mailErr = "";
    var emailError = document.createElement('p');
    emailError.classList.add('emailErrorMessage')
    newsletterForm.addEventListener('submit', function (event) {
        mailErr = "";
        emailError.innerText = mailErr;
        var mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        if (!mailReg.test(newsletterInput.value)) {
            mailErr = "Enter correct e-mail address"
        }
        if (mailErr !== "") {
            event.preventDefault();
            emailError.innerText = mailErr;
            newsletterForm.insertBefore(emailError, newsletterInput);
        }
    });

// var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//     nav: false,
//     autoplayButtonOutput: false
// });

})
;



