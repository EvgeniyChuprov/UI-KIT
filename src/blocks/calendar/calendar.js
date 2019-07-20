require('webpack-jquery-ui/datepicker');

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Calendar {
  constructor($domEl) {
    this.$calendar = $domEl;
    this.calendarInit();
  }

  calendarInit() {
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
        $(this).children().first().html(selectedDate);
      },
    };
  }

  _createCalendar() {
    this.$calendar.datepicker(this._getCalendar());
    this.$calendarHeader.html($.datepicker.formatDate('dd', new Date()));
    this.$calendar.datepicker('setDate', new Date());
    // eslint-disable-next-line no-underscore-dangle
    $.datepicker._gotoToday = (e) => {
      $(e).datepicker('setDate', new Date());
      this.$calendarHeader.html($.datepicker.formatDate('dd', new Date()));
    };
  }
}

$('.js-calendar').each((index, domEl) => {
  new Calendar($(domEl));
});
