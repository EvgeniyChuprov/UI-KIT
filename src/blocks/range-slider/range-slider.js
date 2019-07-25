/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class RangeSlider {
  constructor($range) {
    this.$range = $range.find('.range-slider__range');
    this._rangeInit();
  }

  _rangeInit() {
    this._move();
    this._color();
  }

  _move() {
    this.$range.on('input', this._color.bind(this));
  }

  _color() {
    const color = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 
      ${this.$range.val()}%, #e5e5e5 ${this.$range.val()}%, #e5e5e5 100%)`;

    this.$range.css('background', color);
  }
}

$('.js-range-slider').each((index, el) => {
  new RangeSlider($(el))
});
