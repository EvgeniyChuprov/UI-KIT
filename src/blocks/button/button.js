/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class ButtonRipple {
  constructor($ripple) {
    this.$ripple = $ripple.children();
    this.rippleInit();
  }

  rippleInit() {
    this.$circle = this.$ripple.children();
    this.$offset = this.$ripple.parent().offset();
    this._ripples();
    this._delRipple();
  }

  _ripples() {
    this.$ripple.on('click', this._rippleEffect.bind(this));
  }

  _rippleEffect(e) {
    const x = e.pageX - this.$offset.left;
    const y = e.pageY - this.$offset.top;
    this.$circle.css({ top: `${y}px`, left: `${x}px` });
    this.$ripple.addClass('is-active');
  }

  _delRipple() {
    this.$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this._delClass.bind(this));
  }

  _delClass() {
    this.$ripple.removeClass('is-active');
  }
}

$('.js-button').each((index, el) => {
  new ButtonRipple($(el));
});
