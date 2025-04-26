var current = 0;
var slides = document.getElementsByClassName("slide");
var total = slides.length;

var next = document.getElementById("next");
var prev = document.getElementById("previous");

function showSlide(index) {
  for (var i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}


next.addEventListener("click", function(event) {
  event.preventDefault();
    current = (current + 1) % total; 
  showSlide(current);
});

prev.addEventListener("click", function(event) {
  event.preventDefault();
  current = (current - 1 + total) % total; 
  showSlide(current);
});

showSlide(current);
