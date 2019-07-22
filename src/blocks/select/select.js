require('webpack-jquery-ui/selectmenu');

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Selectmenu {
  constructor($domEl) {
    this.$select = $domEl.children();
    this._selectmenu();
  }

  _selectmenu() {
    this.$select.selectmenu();
  }
}

$('.js-select').each((index, domEl) => {
  new Selectmenu($(domEl));
});
