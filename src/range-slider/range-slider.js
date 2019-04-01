const range = document.querySelector('.range');
function rangeChange(){
    var val = range.value;
    $('.range').css({'background':'-webkit-linear-gradient(left ,#4eb7a8 0%,#4eb7a8 '+val+'%,#e5e5e5 '+val+'%, #e5e5e5 100%)'});
}
range.addEventListener('input',rangeChange);
