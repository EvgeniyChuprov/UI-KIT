class RangeSlider {
  constructor($range) {
    this.$range = $range;
    this.color();
    this.move();
  }

  color() {
    const color = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 
      ${this.$range.val()}%, #e5e5e5 ${this.$range.val()}%, #e5e5e5 100%)`;

    this.$range.css('background', color);
  }

  move() {
    this.$range.on('input', this.color.bind(this));
  }
}

$('.range-slider__range').each((index, el) => {
  new RangeSlider($(el))
});
