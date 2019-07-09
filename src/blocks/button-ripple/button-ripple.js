class ButtonRipple {
  constructor(ripple) {
    this.ripple = ripple;
    this.ripples();
    this.delRipple();
  }

  ripples() {
    this.ripple.on('click', this.rippleEffect.bind(this));
  }

  rippleEffect(e) {
    const offset = this.ripple.parent().offset();
    const $circle = this.ripple.find('.element-ripple__circle');
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    $circle.css( { top: `${y}px`, left: `${x}px` });
    this.ripple.addClass('is-active');
  }

  delRipple() {
    this.ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this.delClass.bind(this));
  }

  delClass() {
    this.ripple.removeClass('is-active');
  }
}

$('.js-ripple').each((index, el) => {
  new ButtonRipple($(el));
});
