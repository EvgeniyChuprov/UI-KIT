/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class ButtonRipple {
  constructor($ripple) {
    this.$ripple = $ripple.children();
    this._rippleInit();
  }

  _rippleInit() {
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
    this.$ripple.addClass('button__ripple_active');
  }

  _delRipple() {
    this.$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this._delClass.bind(this));
  }

  _delClass() {
    this.$ripple.removeClass('button__ripple_active');
  }
}

$('.js-button').each((index, el) => {
  new ButtonRipple($(el));
});
