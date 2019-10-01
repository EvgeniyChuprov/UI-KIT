class ButtonRipple {
  constructor($element) {
    this.$button = $element;
    this._rippleInit();
  }

  _rippleInit() {
    this.$circle = this.$button.find('.button__circle');
    this.$offset = this.$button.offset();
    this._addRipples();
  }

  _addRipples() {
    this.$button.on('click', this._handleButtonClick.bind(this));
    this.$button.on('animationEnd webkitAnimationEnd oanimationEnd MSAnimationEnd',
      this._handleButtonAnimationEnd.bind(this));
  }

  _handleButtonClick(e) {
    const x = e.pageX - this.$offset.left;
    const y = e.pageY - this.$offset.top;
    this.$circle.css({ top: `${y}px`, left: `${x}px` });
    this.$button.addClass('button_effect_ripple');
  }

  _handleButtonAnimationEnd() {
    this.$button.removeClass('button_effect_ripple');
  }
}

$('.js-button').each((index, element) => {
  new ButtonRipple($(element));
});
