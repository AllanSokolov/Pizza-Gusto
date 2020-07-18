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

//Maps
function initMap() {

  console.log("initmap started");

  var myLatLng = {lat: 41.9284868, lng: 12.4838443};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Pizza Gusto'
  });

};



