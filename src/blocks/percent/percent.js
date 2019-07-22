/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Percent {
  constructor($el) {
    this.$circles = $el.children();
    this._drawCharts();
  }

  _drawCharts() {
    const percent = this.$circles.data('percent') / 100;
    const diameter = this.$circles.outerWidth();
    const circumference = Math.ceil(diameter * Math.PI);
    const stroke = Math.ceil(circumference * percent);
    const diff = circumference - stroke;
    $(this.$circles).find('use').css('strokeDasharray', `${stroke}px ${diff}px`);
  }
}

$('.js-percent').each((index, el) => {
  new Percent($(el));
});
