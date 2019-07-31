/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Percent {
  constructor($element) {
    this.$circles = $element.children();
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

$('.js-percent').each((index, element) => {
  new Percent($(element));
});
