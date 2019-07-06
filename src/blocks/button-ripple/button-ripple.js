class ButtonRipple {
  constructor(ripple) {
    this.ripple = ripple;
    this.ripples();
    this.delRipple();
  }

  ripples() {
    this.ripple.on('click', function (e) {
      const $this = $(this);
      const $offset = $this.parent().offset();
      const $circle = $this.find('.element-ripple__circle');
      const x = e.pageX - $offset.left;
      const y = e.pageY - $offset.top;
      $circle.css( { top: `${y}px`, left: `${x}px` });
      $this.addClass('is-active');
    });
  }

  delRipple() {
    this.ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
      $(this).removeClass('is-active');
    });
  }
}

$('.js-ripple').each((index, el) => {
  new ButtonRipple($(el));
});
