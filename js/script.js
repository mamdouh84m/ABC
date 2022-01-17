//  ===================== Header =====================
$(document).scroll(function () {

    if ($(window).scrollTop() > 110) {
        $('header').css('backdrop-filter', 'blur(10px)')
        $('header').css('background-color', 'rgba(255, 255, 255, 0.300)')
        $('header').css('position', 'fixed')
        $('header').css('height', '100px')
        $('header').css('box-shadow', ' 0 5px 60px #555')
    } else {
        $('header').css('background-color', 'white')
        $('header').css('position', 'static')
        $('header').css('height', '110px')
        $('header').css('box-shadow', ' 0 5px 60px #555')
    }
})

// ===================== Slide Menu =====================
$("button").mousedown(function () {
    $(this).css('border-radius', '50%')
})
$("button").mouseup(function () {
    $(this).css('border-radius', '20%')
})

// menu opning
$("button").click(function () {
    $('.menuSide').toggle(500);

})

// ===================== Slider =====================
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000);
}

// ===================== wow js =====================
new WOW().init();






