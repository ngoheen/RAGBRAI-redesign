/**
 * Galleria Classic Theme 2012-08-08
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */

(function($) {

/*global jQuery, Galleria */

Galleria.addTheme({
    name: 'Inky',
    author: 'Nancy Goheen',
    css: 'galleria.inky.css',
    defaults: {
        transition: 'slide',
        thumbCrop:  'height',
        imagePosition: 'top left',

        // set this to false if you want to show the caption all the time:
        _toggleInfo: true
    },
    init: function(options) {

        Galleria.requires(1.28, 'This version of Classic theme requires Galleria 1.2.8 or later');

        // add some elements
        this.addElement('info-link','info-close');
        this.append({
            'info' : ['info-link','info-close']
        });

        // cache some stuff
        var info = this.$('info-link,info-close,info-text'),
            touch = Galleria.TOUCH,
            click = touch ? 'touchstart' : 'click';

        // show loader & counter with opacity
        this.$('loader,counter').show().css('opacity', 0.4);

        // some stuff for non-touch browsers
        if (! touch ) {
            this.addIdleState( this.get('image-nav-left'), { left:-35 });
            this.addIdleState( this.get('image-nav-right'), { right:-35 });
            this.addIdleState( this.get('counter'), { opacity:0 });
        }

        // toggle info
        if ( options._toggleInfo === true ) {
            info.bind( click, function() {
                info.toggle();
            });
        } else {
            info.show();
            this.$('info-link, info-close').hide();
        }

        // bind some stuff
        this.bind('thumbnail', function(e) {

            if (! touch ) {
                // fade thumbnails
                $(e.thumbTarget).css('opacity', 0.6).parent().hover(function() {
                    $(this).not('.active').children().stop().fadeTo(100, 1);
                }, function() {
                    $(this).not('.active').children().stop().fadeTo(400, 0.6);
                });

                if ( e.index === this.getIndex() ) {
                    $(e.thumbTarget).css('opacity',1);
                }
            } else {
                $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.6);
            }
        });

        this.bind('loadstart', function(e) {
            if (!e.cached) {
                this.$('loader').show().fadeTo(200, 0.4);
            }

            this.$('info').toggle( this.hasInfo() );

            $(e.thumbTarget).css('opacity',1).parent().siblings().children().css('opacity', 0.6);
        });

        this.bind('loadfinish', function(e) {
            this.$('loader').fadeOut(200);
        });
    }
});
Galleria.ready(function() {

	/*var gallery = this;
    this.addElement('lightboxbutton');
    this.appendChild('gallery-tools','lightboxbutton');
    this.$('lightboxbutton').click(function() {
            gallery.openLightbox();
            console.log('lightbox');
   });*/

	jQuery('.galleria-stage').after('<div class="gallery-tools"></div>');
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-play"></div><div class="galleria-s1"></div>'));
	jQuery('.gallery-tools').append(jQuery('.galleria-info-link'));
	jQuery('.gallery-tools').append(jQuery('.galleria-info-close'));
	//jQuery('.gallery-tools').append('<div class="ody-pgviewthumbs">View Thumbs<div class="ody-pgthumbsIcon"></div></div>');
	
	jQuery('.gallery-tools').append(jQuery('.galleria-info-title'));
	jQuery('.gallery-tools').append(jQuery('.galleria-counter'));
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-s2"></div>'));
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-lightboxbutton"></div>'));
	//jQuery('.gallery-tools').append(jQuery('<div class="galleria-fullscreen"></div>'));
	
	//jQuery('.galleria-thumbnails-container .galleria-image').click(function() {
		//console.log('clicked');
		//});
	/*jQuery('.ody-pgviewthumbs,.galleria-thumbnails-container .galleria-image').click(function() {
		var clicker = jQuery('.ody-pgviewthumbs');
  		var mylayer = jQuery('.galleria-thumbnails-container');
		var open = mylayer.data('open');
		if (open) {
			mylayer.css({'position' : 'absolute','top' : '440px'});
    		clicker.html('View Thumbs<div class="ody-pgthumbsIcon"></div>');
        	mylayer.data('open', false);
    	} else {
    		mylayer.show().css({'position' : 'absolute','top' : '0'});
    		clicker.html('Hide Thumbs<div class="ody-pgthumbsIcon"></div>');
        	mylayer.data('open', true);
    	}
	});*/
	var gallery = this; // "this" is the gallery instance
	var btn = $('.galleria-play');
	$('.galleria-lightboxbutton').click(function() {
            gallery.openLightbox();
   });
  /* $('.galleria-fullscreen').click(function() {
   		gallery.toggleFullscreen();
   		});*/
   	 $('.galleria-play').click(function() {
   	 	gallery.playToggle();
   		});
   		this.bind('play', function() {
			btn.addClass('playing');
		}).bind('pause', function() {
			btn.removeClass('playing');
		});
	//$('.galleria-fullscreen').click( this.proxy(function() { this.enterFullscreen(); }) )
	this.bind(Galleria.IMAGE, function(e) {
		var current = gallery.getData(gallery.getIndex());
		var buy = current.title;
                						
		if(buy !="") {
			jQuery('.galleria-info-title').css({'display':'block'});
		} else {
			jQuery('.galleria-info-title').css({'display':'none'});
		}
	/* determines height of caption */
	var trueHeight = ( this.$('info-text').height() );
	var stageHeight = -21;
	var infoTop = stageHeight - trueHeight;
	jQuery('.galleria-info').css({'top' : infoTop});
});
});
/*Galleria.run('.galleria', {
	height: 0.5635;
});*/
}(jQuery));
