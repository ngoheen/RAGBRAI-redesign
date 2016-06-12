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
            this.addIdleState( this.get('galleria-image-nav-left'), { left:35 });
            this.addIdleState( this.get('galleria-image-nav-right'), { right:35 });
            this.addIdleState( this.get('counter'), { opacity:1 });
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
Galleria.configure({
    showImagenav: true,
    imagePosition: 'top',
    idleMode: false,
    imageMargin: '37',
    preload: 2
});
Galleria.ready(function() {
	jQuery('.galleria-stage').after('<div class="gallery-tools"></div>');
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-play"></div><div class="galleria-s1"></div>'));
	jQuery('.gallery-tools').append(jQuery('.galleria-info-link').text("Show caption"));
	jQuery('.gallery-tools').append(jQuery('.galleria-info-close').text("Hide caption"));	
	jQuery('.gallery-tools').append(jQuery('.galleria-info-title'));
	jQuery('.gallery-tools').append(jQuery('.galleria-counter'));
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-s2"></div>'));
	jQuery('.gallery-tools').append(jQuery('<div class="fa fa-clone fa-rotate-270"></div>'));
	jQuery('.gallery-tools').append(jQuery('<div class="galleria-s3"></div>'));
	
	
	var gallery = this; // "this" is the gallery instance
	var btn = $('.galleria-play');
	$('.fa-clone').click(function() {
            gallery.openLightbox();
   });
 
    $('.galleria-play').click(function() {
        gallery.playToggle();
    });
    this.bind('play', function() {
        btn.addClass('playing');
	}).bind('pause', function() {
        btn.removeClass('playing');
    });
	
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
	    var stageHeight = -140;
	    var infoTop = stageHeight - trueHeight;
	    jQuery('.galleria-info').css({'top' : infoTop});
    });
});

}(jQuery));
