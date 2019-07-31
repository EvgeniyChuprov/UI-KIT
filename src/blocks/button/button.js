/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class ButtonRipple {
  constructor($element) {
    this.$button = $element;
    this._rippleInit();
  }

  _rippleInit() {
    this.$circle = this.$button.find('.button__circle');
    this.$offset = this.$button.offset();
    this._ripples();
  }

  _ripples() {
    this.$button.on('click', this._handleButtonRippleEffect.bind(this));
    this.$button.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this._delClass.bind(this));
  }

  _handleButtonRippleEffect(e) {
    const x = e.pageX - this.$offset.left;
    const y = e.pageY - this.$offset.top;
    this.$circle.css({ top: `${y}px`, left: `${x}px` });
    this.$button.addClass('button_effect_ripple');
  }

  _delClass() {
    this.$button.removeClass('button_effect_ripple');
  }
}

$('.js-button').each((index, element) => {
  new ButtonRipple($(element));
});
