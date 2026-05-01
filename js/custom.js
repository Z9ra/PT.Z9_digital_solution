
// PRELOADER
	jQuery(window).on('load', function() {
        // will first fade out the loading animation
	jQuery(".sk-spinner").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
});

// NIVO LIGHTBOX (initialized inside document.ready below)

// ISOTOPE FILTER
jQuery(document).ready(function($){

	// Initialize Nivo Lightbox after DOM is ready
	$('.iso-box-section a').nivoLightbox({
		effect: 'fadeScale',
	});

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');

	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.on('load', function(){
	    		$container.isotope('layout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// MAIN NAVIGATION
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* NAVIGATION VISIBLE ON SCROLL */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


// WOW ANIMATED 
$(function()
{
    new WOW().init();
});

// STATS COUNTER ANIMATION
$(function() {
    var counted = false;
    function animateCounters() {
        if (counted) return;
        var statsSection = document.getElementById('stats');
        if (!statsSection) return;
        var rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counted = true;
            $(window).off('scroll', animateCounters);
            $('.stat-number').each(function() {
                var $this = $(this);
                var target = parseInt($this.attr('data-target'));
                $({ count: 0 }).animate({ count: target }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.count));
                    },
                    complete: function() {
                        $this.text(target + '+');
                    }
                });
            });
        }
    }
    $(window).on('scroll', animateCounters);
    animateCounters();
});

// SCROLL TO TOP BUTTON
$(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('#scrollTop').addClass('visible');
        } else {
            $('#scrollTop').removeClass('visible');
        }
    });
});