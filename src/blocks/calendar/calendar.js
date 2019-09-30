import datepicker from 'webpack-jquery-ui/datepicker';

class Calendar {
  constructor($element) {
    this.$calendar = $element;
    this._calendarInit();
  }

  _calendarInit() {
    this.$calendarHeader = this.$calendar.children();
    this._createCalendar();
  }

  _getCalendar() {
    return {
      dayNamesMin: this.$calendar.data('day-names'),
      firstDay: this.$calendar.data('first-day'),
      showButtonPanel: this.$calendar.data('button-panel'),
      showOtherMonths: this.$calendar.data('other-months'),
      dateFormat: this.$calendar.data('data-format'),
      gotoCurrent: this.$calendar.data('goto-current'),
      onSelect(selectedDate) {
        $(this).find('.calendar__header').html(selectedDate);
      },
    };
  }

  _createCalendar() {
    this.$calendar.datepicker(this._getCalendar());
    this.$calendarHeader.html($.datepicker.formatDate('dd', new Date()));
    this.$calendar.datepicker('setDate', new Date());

    $.datepicker._gotoToday = (e) => {
      $(e).datepicker('setDate', new Date());
      this.$calendarHeader.html($.datepicker.formatDate('dd', new Date()));
    };
  }
}

$('.js-calendar').each((index, element) => {
  new Calendar($(element));
});
