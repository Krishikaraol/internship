
$(document).ready(function() {
    $('.accordion-header').on('click', function() {
        // Close all open accordion sections
        $('.accordion-content').slideUp();
        $('.accordion-item').removeClass('active');

        // Toggle the clicked section
        const content = $(this).next('.accordion-content');
        if (content.is(':visible')) {
            content.slideUp();
        } else {
            content.slideDown();
            $(this).parent().addClass('active');
        }
    });
});
