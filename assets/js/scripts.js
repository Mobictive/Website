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
                self.screensCarousel();
            });
        },

        homepageTabs: function() {
            var $document = this.cache.$document;
            $('#tabs .tabs-content').hide();
            $('#tabs .tabs-content:first').addClass('show').show();
            $document.on('click', '#tabs .tabs-menu li a', function(e) {
                e.preventDefault();
                var _id = $(this).attr('href');

                $('#tabs .tabs-menu li a').removeClass('active');
                $(this).addClass('active');

                $('#tabs .tabs-content').removeClass('show').hide();
                $(_id).addClass('show').show();

                return false;
            });
        },

        screensCarousel: function() {
            if( ! $.fn.slick ) {
                return;
            };
            var $screenWrap = $('.game-screens');
            if( $screenWrap.length ) {
                if( $screenWrap.hasClass('portrait') ) {
                    $screenWrap.slick({
                        infinite: false,
                        adaptiveHeight: true,
                        slidesToShow: 2,
                        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/arrow-left.svg"></button>',
                        nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/arrow-right.svg"></button>',
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });
                }
                else {
                    $screenWrap.slick({
                        infinite: false,
                        adaptiveHeight: true,
                        slidesToShow: 1,
                        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/arrow-left.svg"></button>',
                        nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/arrow-right.svg"></button>'
                    });
                }
            }
        }
    };

    // Run.
    _Mobictive.init();

})(jQuery);