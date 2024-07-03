// scripts.js
$(document).ready(function() {
    $('.tab-links a').on('click', function(e) {
        e.preventDefault();

        const target = $(this).attr('href');

        $('.tab-links li').removeClass('active');
        $(this).parent().addClass('active');

        $('.tab').removeClass('active');
        $(target).addClass('active');
    });
});
