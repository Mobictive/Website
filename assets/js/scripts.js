;( function($) {
	"use strict";

    var _Mobictive = {
        cache: {},

        init: function() {
            this.cacheElements();
            this.bindEvents();
        },

        cacheElements: function() {
            this.cache.$document = $(document);
            this.cache.$window = $(window);
            this.cache.$body = $('body');
        },

        bindEvents: function() {
            var self = this;

            self.cache.$document.ready( function() {
                self.homepageTabs();
                self.screenCarousel();
                self.lightBoxInit();
            });
        },

        homepageTabs: function() {
            var $document = this.cache.$document;
            $('#tabs .tab-content').hide();
            $('#tabs .tab-content:first').addClass('show').show();
            $document.on('click', '#tabs .tabs-menu li a', function(e) {
                e.preventDefault();
                var _id = $(this).attr('href');

                $('#tabs .tabs-menu li a').removeClass('active');
                $(this).addClass('active');

                $('#tabs .tab-content').removeClass('show').hide();
                $(_id).addClass('show').show();

                return false;
            });
        },

        screenCarousel: function() {
            if( ! $.fn.slick ) {
				return;
			};
            var $document = this.cache.$document;
            var $screenClass = $('.game-screens');
            if( $screenClass.length ) {
                $screenClass.slick({
                    infinite: false,
                    variableWidth: true,
                    adaptiveHeight: true,
                    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/arrow-left.svg"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/arrow-right.svg"></button>'
                });
            }
        },

        lightBoxInit: function() {
            if( ! $.fn.lightspeedBox ) {
				return;
			};
            $.fn.lightspeedBox({
                showImageTitle: false,
                showDownloadButton: false,
                showAutoPlayButton: false,
                zIndex: 999999
            });
        }
    };

    // Run.
    _Mobictive.init();

})(jQuery);