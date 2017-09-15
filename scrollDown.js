$(document).ready(function() {
    $(document).on('click', '#to-about', function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - 61
        }, 1200, 'easeInOutQuart');
    });

    $(document).on('click', '#to-mission', function() {
        $('html, body').animate({
            scrollTop: $('#mission').offset().top - 61
        }, 1200, 'easeInOutQuart');
    });

    $(document).on('click', '#to-interested', function() {
        $('html, body').animate({
            scrollTop: $('#interested').offset().top - 61
        }, 1200, 'easeInOutQuart');
    });

    $(document).on('click', '#to-connect', function() {
        $('html, body').animate({
            scrollTop: $('#connect').offset().top - 61
        }, 1200, 'easeInOutQuart');
    });

    $(document).on('click', '#to-xkcd', function() {
        $('html, body').animate({
            scrollTop: $('#xkcd').offset().top - 61
        }, 1200, 'easeInOutQuart');
    });

    $(document).on('click', '.arrow-up', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1600, 'easeInOutQuart');
    });

    $(window).on("scroll touchmove", function () {
        if ($(this).scrollTop() > $('.section').offset().top - 200) {
            $('#navbar').addClass('shrunk');
        }
        else {
            $('#navbar').removeClass('shrunk');
        }
    });
})