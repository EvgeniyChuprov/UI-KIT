class Pie {
  constructor(pie) {
    this.pie = pie;
    this.pieChart();
  }

  pieChart() {
    this.pie.each(function () { 
      let start = 0;
      let offset = 0;
      let total = 0;
      let n = 0;

      $(this).find('.pie-chart__block_color').each(function () {
        const item = $(this);
        const value = item.data('doughnut-value') *        
        item.append('<div class="before"></div>');

        if (value > 50) {
          item.addClass('big');
        }

        total += value;

        n += 1;

      }).each(function (index, el) {
        const item = $(this);
        const value = Math.round(item.data('doughnut-value') * 3.6);

        if (total >= 99.9 && n == index + 1) {
          value = 360 - start;
        }

        item.css({
          '-webkit-transform': 'rotate(' + (start + offset) + 'deg)',
          '-moz-transform': 'rotate(' + (start + offset) + 'deg)',
          '-o-transform': 'rotate(' + (start + offset) + 'deg)',
          'transform': 'rotate(' + (start + offset) + 'deg)'
        });

        item.find('.before').css({
          '-webkit-transform': 'rotate(' + (value + 1) + 'deg)',
          '-moz-transform': 'rotate(' + (value + 1) + 'deg)',
          '-o-transform': 'rotate(' + (value + 1) + 'deg)',
          'transform': 'rotate(' + (value + 1) + 'deg)'
        });

        start += value;
      });
    });
  }
}

$('.pie-chart').each((index, el) => {
  new Pie($(el));
});
