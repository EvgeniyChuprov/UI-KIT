class BubbleSlider {
  constructor($domEl) {
    this.$bubbleSlider = $domEl;
    this.sliderInit();
  }

  sliderInit() {
    this.$range = this.$bubbleSlider.children().first();
    this.$tool = this.$bubbleSlider.children().last();
    this._rangeTool();
    this._bubble();
  }

  _rangeTool() {
    const tooltipAdjustmentFirst = -20;
    const tooltipAdjustmentSecond = 18;
    const moving = this.$range.val() * (this.$range.outerWidth() / this.$range.attr('max'))
    - this.$tool.outerWidth() / 2 + (this.$range.val() - this.$range.attr('min'))
    * tooltipAdjustmentFirst / (this.$range.attr('max') - this.$range.attr('min')) + tooltipAdjustmentSecond;
    this.$tool.html(this.$range.val());
    this.$tool.css('left', `${moving}px`);
  }

  _bubble() {
    this.$range.on('input', this._rangeTool.bind(this));
  }
}

$('.js-bubble-slider').each((index, domElement) => {
  new BubbleSlider($(domElement));
});
