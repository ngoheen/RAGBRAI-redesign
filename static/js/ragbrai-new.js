// DROPDOWN MENU
var DropMenu = function() {
    var self = this;
	var $ = jQuery.noConflict();
	this.init = function() {
		$('#menu-primary').on('click.menudrop', '.menu-item-has-children', self.toggleMenu);
        $('#login').on('click.menudrop', self.toggleMenu);
		$('html').on('click.menudrop', self.closeall);
		$('.menu-second').on('click.menudrop', '.menu-item-has-children', self.toggleMenu);
		$('#menu-item-search .dropdown .search-close').on('click.menudrop', self.closeall);
	};

	this.toggleMenu = function(e) {
        var target = $(e.target);

		e.stopPropagation();
		if (!target.is('div#login, div.dropdown, div.dropdown *')) {
			var menuItem = $(this);
			var dropdown = menuItem.find('.dropdown');

			//Close other dropdowns
			$('.dropdown').not(dropdown).slideUp();
			$('.menu-item').not(menuItem).removeClass('active');
			menuItem.toggleClass('active');

			//If the dropmenu hasn't already been built, build it.
			if (dropdown.length === 0) {
				dropdown = $('<div>').attr('class', 'dropdown');
				dropdown.slideToggle('slow');
				var contents = self.getContents(menuItem);
				contents.done(function(result) {
					dropdown.html(result);
				}).fail(function(error) {
					dropdown.html("Unable to load menu. Please, reload the page and try again.");
					console.log(error);
				});
			} else { //If dropmenu already exists display it
				dropdown.slideToggle('slow');
			}
		}
	};

	this.closeall = function() {
	    $('.menu-second .dropdown').hide();
		$('#menu-primary .dropdown').hide();
        $('#login .dropdown').hide();
		$('#menu-primary > li').removeClass('active');
		$('.menu-second > li').removeClass('active');
		$('.menu-second > td').removeClass('active');
	};
};
jQuery(document).ready(function($) {
	var drop_menu = new DropMenu();
	drop_menu.init();
});

// COUNTDOWN
jQuery(document).ready(function($) {
    $("#gci_countdown-2").countdown({
        date : "July 24, 2016 06:00:00",
        onComplete : function() {
            $('#gci_countdown-2').html('Bike on!');
        }
    });
});
            
// RESTRUCTURE Sitemap
jQuery(function($){  
    var a = $('.sitemap_container .sub-menu li').unwrap();
    var b = $('.sitemap_container li li').unwrap();
    var c = $('ul#menu-sitemap > a').wrap('<li><h2>');
    var q = $('.sitemap_container h2 a:contains("General")').unwrap().unwrap().remove();
    var d = $('ul#menu-sitemap a:contains("Other")').unwrap().unwrap();
    var e = $('ul#menu-sitemap h2 a:contains("RAGBRAI Expo")');
    var f = $('ul#menu-sitemap h2 a:contains("Events")').unwrap();
    var g = $('ul#menu-sitemap li a:contains("Route Announcement Party")').parent().after('<li><a href="http://ragbrai.com/events">Events</a></li>');
   // d.css('display','none');
    d.remove();
    e.html('Events/Expo');
    f.css('display','none');
    var z = $('ul#menu-sitemap').find('li h2 a')/*.css("color", "red")*/;
    var y = $('ul#menu-sitemap li').wrap('<div>').contents().unwrap();
    var w = $('ul#menu-sitemap div').unwrap();
    var v = $('.sitemap_container').unwrap();
    var numitems =  $(".sitemap_container > div").length; 
    //console.log(numitems);
    
    var item1 = $( ".sitemap_container > div" );
    var $div = $("<div/>", {
            class: 'myClass'
        });
       var $div2 = $("<div/>", {
            class: 'my2Class'
        });  
        var $div3 = $("<div/>", {
            class: 'my3Class'
        });
        var $div4 = $("<div/>", {
            class: 'my4Class'
        });
    item1.slice(0,13).wrapAll($div);
    item1.slice(13,21).wrapAll($div2);
    item1.slice(21,35).wrapAll($div3);
    item1.slice(35,43).wrapAll($div4);
});

// TOP SPONSORS
jQuery('#gci_sponsors-2').carouFredSel({
    responsive: true,
    width: '140',
    scroll: 1,
    align: 'center',
    scroll: {
    fx: 'crossfade',
        pauseOnHover: true,
        duration: 1000
    }
});

// BOTTOM SPONSORS
jQuery(document).ready(function($) {
    var _scroll = {
        delay: 1000,
        easing: 'linear',
        items: 1,
        duration: 0.03,
        timeoutDuration: 0,
        pauseOnHover: 'immediate'
    };

    $('#gci_sponsors-3').carouFredSel({
        width: 1400,
        align: false,
        items: {
            width: 'variable',
            height: 70,
            visible: 1
        },
        scroll: _scroll
    });

    $('.caroufredsel_wrapper').css('width', '100%');
    
    // PRODUCT ROW HEIGHTS
    $('.wrapper').matchHeight();
    
    $('.imageDiv').each(function () {
        // store the image link inside a variable from 'src' attribute
        var getImageSrc =  jQuery(this).find('img').attr('src');
        // add div background image using the variable above
        jQuery(this).parent('.backgroundDiv').css('background-image', 'url(' + getImageSrc + ')');
        jQuery(this).remove();
    });
    
    // MAIN CAROUSEL TABLET
    if ($('.tablet #slider').length > 0) {    
        $(".tablet #slider").responsiveSlides({        
            auto: true,
            pager: true,
            nav: false,
            timeout: 8000,
            speed: 1500,
            namespace: "callbacks",
            before: function () {
                $('.slider_msg').hide();
            },
            after: function () {
                $('.slider_msg').hide().slideDown('2500').delay('5000').fadeOut('slow');
            }
        });
    };
  
    // MAIN CAROUSEL PHONE
     if ($('.flypanels-content #slider').length > 0) {    
        $(".flypanels-content #slider").responsiveSlides({        
            auto: true,
            pager: true,
            nav: false,
            timeout: 8000,
            speed: 1500,
            namespace: "callbacks"
        });
    }
});


 