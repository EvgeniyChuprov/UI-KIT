(function ($, window, document, undefined) {
  'use strict';

  const $ripple = $('.js-ripple');

  $ripple.on('click.ui.ripple', function (e) {
    const $this = $(this);
    const $offset = $this.parent().offset();
    const $circle = $this.find('.c-ripple__circle');
    const x = e.pageX - $offset.left;
    const y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');
  });

  $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function (e) {
    $(this).removeClass('is-active');
  });

})(jQuery, window, document);