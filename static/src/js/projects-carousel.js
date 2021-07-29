'use strict';

let $ = require('jquery');
require('slick-carousel');


$(function () {
    const $projectsCarousel = $('.projects-carousel');

    $projectsCarousel.each(function () {
        let $this = $(this);

        $this.find('.projects-carousel__slides').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            fade: false,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 416,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    });
});
