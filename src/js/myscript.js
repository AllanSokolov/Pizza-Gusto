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

//Scroll to top button

// When the user scrolls down 200px from the top of the document, the button will show
window.onscroll = function()
{
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    {
    	document.getElementById("toTopBtn").style.display = "block";
    }
    else
    {
    	document.getElementById("toTopBtn").style.display = "none";
    }
};

function scrollToTop()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox and Opera
}