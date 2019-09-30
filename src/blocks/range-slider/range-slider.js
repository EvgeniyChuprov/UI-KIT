class RangeSlider {
  constructor($element) {
    this.$range = $element.find('.range-slider__range');
    this._rangeInit();
  }

  _rangeInit() {
    this._move();
    this._colorDraw();
  }

  _move() {
    this.$range.on('input', this._handleRangeInput.bind(this));
  }

  _handleRangeInput() {
    this._colorDraw();
  }

  _colorDraw() {
    const color = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 
      ${this.$range.val()}%, #e5e5e5 ${this.$range.val()}%, #e5e5e5 100%)`;

    this.$range.css('background', color);
  }
}

$('.js-range-slider').each((index, element) => {
  new RangeSlider($(element));
});
