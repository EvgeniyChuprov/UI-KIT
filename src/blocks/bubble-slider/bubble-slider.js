class BubbleSlider {
  constructor(domEl) {
    this.range = domEl.range;
    this.tool = domEl.tool;
    this.rangeTool();
    this.bubble();
  }

  rangeTool() {
    this.tool.innerHTML = this.range.value;
    this.tool.style.left = `${this.range.value * (this.range.offsetWidth / this.range.max) - this.tool.offsetWidth / 2 + (this.range.value - this.range.min) * -20 / (this.range.max - this.range.min) + 10 + 8}px`;
  }

  bubble() {
    this.range.oninput = this.rangeTool.bind(this);
  }
}

const domEl = {
  range: document.querySelector('.custom-rangeInput'),
  tool: document.querySelector('.custom-rangeslider__tooltip'),
};

new BubbleSlider(domEl);
