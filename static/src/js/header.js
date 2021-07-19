
'use strict';

import jQuery from 'jquery';

jQuery(function($) {

    //Reduce header image sizes (via css) on scroll down, show on scroll up
    let $lastScrollTop = 0;
    $(window).on('scroll', function() {
        let $st = $(this).scrollTop(),
            $header = $('.site-header');

        if ($st <= 0) {
            $header.removeClass('scrolled');
        } else {
            setTimeout(function () {
                if ($st > $lastScrollTop) {
                    $header.addClass('scrolled');
                } else {
                    $header.removeClass('scrolled');
                }
                $lastScrollTop = $st;
            }, 200);
        }
    });
});
