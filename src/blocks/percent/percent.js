(function () {
  function drawCharts() {

    const circles = document.querySelectorAll('.percent-circle');

    circles.forEach(function (el) {
      const percent = el.dataset.percent / 100;
      const diameter = el.offsetWidth;
      const circumference = Math.ceil(diameter * Math.PI);
      const stroke = Math.ceil(circumference * percent);
      const diff = circumference - stroke;

      el.querySelector('.percent-circle__inner').style.strokeDasharray = stroke + 'px ' + diff + 'px';
    });
  }

  document.addEventListener('DOMContentLoaded', drawCharts);
})();
