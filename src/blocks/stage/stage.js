class Stage {
  constructor($domEl) {
    this.$stage = $domEl;
    this.stageInit();
  }

  stageInit() {
    this.$stageStep = this.$stage.children();
    this.$first = this.$stage.children().first();
    this._stages();
  }

  _stages() {
    const max = this.$stage.data('max');
    const resuilt = `${100 / (max - 1)}%`;
    this.$stageStep.css('width', resuilt);
    this.$first.css('width', '0');
  }
}

$('.js-stage').each((index, domElement) => {
  new Stage($(domElement));
});