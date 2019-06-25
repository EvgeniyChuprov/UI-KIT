$(function () {
	const range = document.querySelector('.custom-rangeInput');
	const tool = document.querySelector('.custom-rangeslider__tooltip');

	range.oninput = function () {
		tool.innerHTML = range.value;
		tool.style.left = range.value * (range.offsetWidth / range.max) - tool.offsetWidth / 2 + scale(range.value, range.min, range.max, 10, -10) + 8 + 'px';
	}

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

	function rangeTool() {
		tool.innerHTML = range.value;
		tool.style.left = range.value * (range.offsetWidth / range.max) - tool.offsetWidth / 2 + scale(range.value, range.min, range.max, 10, -10) + 8 + 'px';
	}

	rangeTool();
}); 