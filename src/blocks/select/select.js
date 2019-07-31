require('webpack-jquery-ui/selectmenu');

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Selectmenu {
  constructor($element) {
    this.$select = $element.children();
    this._selectmenu();
  }

  _selectmenu() {
    this.$select.selectmenu();
  }
}

$('.js-select').each((index, element) => {
  new Selectmenu($(element));
});
