$(function () {
  var range = document.querySelector('.range');
  range.oninput = function () {
    let val = range.value;
    $('.range').css({ 'background': '-webkit-linear-gradient(left ,#4eb7a8 0%,#4eb7a8 ' + val + '%,#e5e5e5 ' + val + '%, #e5e5e5 100%)' });
  }
});