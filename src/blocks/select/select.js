require('webpack-jquery-ui/selectmenu');

class Selectmenu {
  constructor($domEl) {
    this.$select = $domEl;
    this.selectmenu();
  }

  selectmenu() {
    this.$select.selectmenu();
  }
}

$('.js-select').each((index, domEl) => {
  new Selectmenu($(domEl));
});
