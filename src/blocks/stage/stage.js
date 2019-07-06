class Stage {
  constructor(domEl) {
    this.stage = domEl.stage;
    this.stageStep = domEl.stageStep;
    this.first = domEl.first;
    this.stages();
  }

  stages() {
    const max = this.stage.data('max');
    const resuilt = `${100 / (max - 1)}%`;
    this.stageStep.css('width', resuilt);
    this.first.css('width', '0');
  }
}

$('.stage').each(() => {
  const el = {
    stage: $('.stage'),
    stageStep: $('.stage__steps'),
    first: $('.stage__steps:first-child'),
  };
  new Stage(el);
});
