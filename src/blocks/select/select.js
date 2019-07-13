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

$('.select__block').each((index, domEl) => {
  new Selectmenu($(domEl));
});
