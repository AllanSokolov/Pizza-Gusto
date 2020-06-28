//Responsive navbar 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function () {

  $('.icon').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});