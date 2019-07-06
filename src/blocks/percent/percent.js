class Percent {
  constructor(el) {
    this.circles = el;
    this.drawCharts();
  }

  drawCharts() {
    const percent = this.circles.dataset.percent / 100;
    const diameter = this.circles.offsetWidth;
    const circumference = Math.ceil(diameter * Math.PI);
    const stroke = Math.ceil(circumference * percent);
    const diff = circumference - stroke;

    this.circles.querySelector('.percent-circle__inner').style.strokeDasharray = `${stroke}px ${diff}px`;
  }
}

$('.percent-circle').each((index, el) => {
  new Percent(el);
});
