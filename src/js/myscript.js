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


//Counter
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});

// Sign up form
function regValidation() {
	var email = document.signupForm.email;
	var name = document.signupForm.fullName;
	var pass1 = document.signupForm.pwd1;
	var pass2 = document.signupForm.pwd2;
	var phone = document.signupForm.phone;
	var birth = document.signupForm.birthDate;
	var country = document.signupForm.country;
	var city = document.signupForm.city;
	var zip = document.signupForm.zip;
	var addr = document.signupForm.address;
	var nameCreditCard = document.signupForm.nameCard;
	var ccnumber = document.signupForm.cardNumber;
	var cvv = document.signupForm.cvv;

	if( document.signupForm.country.value == "notset" ) {
		alert( "Please select your country!" );
		document.signupForm.country.focus();
        return false;
    }

	alert('Signed up successfully!')
	window.location.reload()
	return true;
}

 $('#pwd1, #pwd2').on('keyup', function () {
	if ($('#pwd1').val() == $('#pwd2').val()) {
	  $('#pwd2').html('Matching').css('color', 'green');
	} else 
	  $('#pwd2').html('Not Matching').css('color', 'red');
});


