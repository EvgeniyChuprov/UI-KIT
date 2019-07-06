class RangeSlider {
  constructor(range) {
    this.range = range;
    this.color();
    this.move();
  }

  color() {
    this.range.css({ 'background': '-webkit-linear-gradient(left ,#4eb7a8 0%,#4eb7a8 ' + this.range.val() + '%,#e5e5e5 ' + this.range.val() + '%, #e5e5e5 100%)' });
  }

  move() {
    this.range.on('input', this.color.bind(this));
  }
}

$('.range').each((index, el) => {
  new RangeSlider($(el))
});
