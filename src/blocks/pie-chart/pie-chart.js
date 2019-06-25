$(function () {
	$("[data-doughnut]").each(function () {
		const $this = $(this);
		const start = 0;
		const offset = 0;
		const total = 0;
		const n = 0;

		$this.find("> div").each(function () {
			const item = $(this);
			const value = item.data("doughnut-value") * 1;

			item.append('<div class="before"></div>');

			if (value > 50) {
				item.addClass("big");
			}

			total += value;

			n += 1;

		}).each(function (index, el) {
			const item = $(this);
			const value = Math.round(item.data("doughnut-value") * 3.6);

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
});