class ButtonRipple {
  constructor($ripple) {
    this.$ripple = $ripple;
    this.$circle = this.$ripple.children();
    this.$offset = this.$ripple.parent().offset();
    this.ripples();
    this.delRipple();
  }

  ripples() {
    this.$ripple.on('click', this.rippleEffect.bind(this));
  }

  rippleEffect(e) {
    const x = e.pageX - this.$offset.left;
    const y = e.pageY - this.$offset.top;
    this.$circle.css({ top: `${y}px`, left: `${x}px` });
    this.$ripple.addClass('is-active');
  }

  delRipple() {
    this.$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this.delClass.bind(this));
  }

  delClass() {
    this.$ripple.removeClass('is-active');
  }
}

$('.js-ripple').each((index, el) => {
  new ButtonRipple($(el));
});
