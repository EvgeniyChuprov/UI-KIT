const max = $('.stage').data('max');
const resuilt = `${100 / (max - 1)}%`;
$('.stage__steps').css('width', resuilt);

$('.stage__steps:first-child').css('width', '0');
