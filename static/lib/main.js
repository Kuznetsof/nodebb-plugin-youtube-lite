"use strict";

    $(window).on('action:widgets.loaded', function() {
        $('.js-lazyYT').lazyYT();
    });


        $(window).trigger('action:composer.topics.post', function() {
        $('.js-lazyYT').lazyYT();
    });
