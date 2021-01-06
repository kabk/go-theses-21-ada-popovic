// $(window).on('scroll', function () {
//     var pixs = $(document).scrollTop()
//     pixs = pixs / 100;
//     $(body).css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })
// });

document.addEventListener("DOMContentLoaded", function(event) {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});
