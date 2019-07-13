class Stage {
  constructor($domEl) {
    this.$stage = $domEl;
    this.$stageStep = $domEl.children();
    this.$first = $domEl.children().first();
    this.stages();
  }

  stages() {
    const max = this.$stage.data('max');
    const resuilt = `${100 / (max - 1)}%`;
    this.$stageStep.css('width', resuilt);
    this.$first.css('width', '0');
  }
}

$('.stage').each((index, domElement) => {
  new Stage($(domElement));
});