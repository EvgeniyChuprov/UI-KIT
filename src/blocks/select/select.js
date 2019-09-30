
import selectmenu from 'webpack-jquery-ui/selectmenu';

class SelectMenu {
  constructor($element) {
    this.$select = $element.children();
    this._selectMenu();
  }

  _selectMenu() {
    this.$select.selectmenu();
  }
}

$('.js-select').each((index, element) => {
  new SelectMenu($(element));
});
