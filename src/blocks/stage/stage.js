class Stage {
  constructor($element) {
    this.$stage = $element;
    this._stageInit();
  }

  _stageInit() {
    this.$stageStep = this.$stage.children();
    this.$firstStepWidth = this.$stage.children().first();
    this._addStages();
  }

  _addStages() {
    const max = this.$stage.data('max');
    const result = `${100 / (max - 1)}%`;
    this.$stageStep.css('width', result);
    this.$firstStepWidth.css('width', '0');
  }
}

$('.js-stage').each((index, element) => {
  new Stage($(element));
});
