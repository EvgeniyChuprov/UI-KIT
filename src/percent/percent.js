(function () {
  function drawCharts() {
    var circles = document.querySelectorAll('.percent-circle');
    circles.forEach(function (el) {
      var percent = el.dataset.percent / 100;
      var diameter = el.offsetWidth;
      var circumference = Math.ceil(diameter * Math.PI);
      var stroke = Math.ceil(circumference * percent);
      var diff = circumference - stroke;
      el.querySelector('.percent-circle-inner').style.strokeDasharray = stroke + 'px ' + diff + 'px';
    });
  }
  document.addEventListener('DOMContentLoaded', drawCharts);
})();
