class BubbleSlider {
  constructor($domEl) {
    this.$range = $domEl.children().first();
    this.$tool = $domEl.children().last();
    this.rangeTool();
    this.bubble();
  }

  rangeTool() {
    const tooltipAdjustmentFirst = -20;
    const tooltipAdjustmentSecond = 18;
    const moving = this.$range.val() * (this.$range.outerWidth() / this.$range.attr('max'))
    - this.$tool.outerWidth() / 2 + (this.$range.val() - this.$range.attr('min'))
    * tooltipAdjustmentFirst / (this.$range.attr('max') - this.$range.attr('min')) + tooltipAdjustmentSecond;
    this.$tool.html(this.$range.val());
    this.$tool.css('left', `${moving}px`);
  }

  bubble() {
    this.$range.on('input', this.rangeTool.bind(this));
  }
}

$('.custom-rangeslider').each((index, domElement) => {
  new BubbleSlider($(domElement));
});
