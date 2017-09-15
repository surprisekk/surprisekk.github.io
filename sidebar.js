$(document).ready(function() {
    $(document).on('click tap', '#sidebar-button', function() {
        $('#mobile-sidebar').animate({
            left: '0'
        }, 500, 'easeInOutQuart');
        $('#cover').fadeIn(500);
    });

    $(document).on('click tap', '#cover', function() {
        $('#mobile-sidebar').animate({
            left: '-80%'
        }, 500, 'easeInOutQuart');
        $('#cover').fadeOut(500);
    });

    $(document).on('click tap', '#x', function() {
        $('#mobile-sidebar').animate({
            left: '-80%'
        }, 500, 'easeInOutQuart');
        $('#cover').fadeOut(500);
    });
})