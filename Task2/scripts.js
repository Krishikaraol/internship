$(document).ready(function() {
    $('.faq-question').on('click', function() {
      $('.faq-answer').slideUp();
      $('.faq-item').removeClass('active');
      $('.faq-toggle').html('<img src="photos/Group 76.png" alt="">');

      const content = $(this).next('.faq-answer');
      if (content.is(':visible')) {
        content.slideUp();
        $(this).find('.faq-toggle').html('<img src="photos/Group 76.png" alt="">');
      } else {
        content.slideDown();
        $(this).parent().addClass('active');
        $(this).find('.faq-toggle').html('<img src="photos/Group 77.png" alt="">');
      }
    });

    // $('.faq-item:first-child.faq-answer').slideDown();
    // $('.faq-item:first-child').addClass('active');
    // $('.faq-item:first-child.faq-toggle').html('<img src="photos/Group 77.png" alt="">');
  });
