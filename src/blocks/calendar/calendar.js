require('webpack-jquery-ui/datepicker');

class Calendar {
  constructor(domEl) {
    this.calendar = domEl;
    this.createCalendar(this.calendar);
  }

  getCalendar() {
    return {
      dayNamesMin: this.calendar.data('day-names'),
      firstDay: this.calendar.data('first-day'),
      showButtonPanel: this.calendar.data('button-panel'),
      showOtherMonths: this.calendar.data('other-months'),
      dateFormat: this.calendar.data('data-format'),
      gotoCurrent: this.calendar.data('goto-current'),
      onSelect(selectedDate) {
        $('.calendar__header').html(selectedDate);
      },
    };
  }

  createCalendar(calendar) {
    $(calendar).datepicker(this.getCalendar());
    $('.calendar__header').text($.datepicker.formatDate('dd', new Date()));
    $(this.calendar).datepicker("setDate", new Date());
    // eslint-disable-next-line no-underscore-dangle
    $.datepicker._gotoToday = function (id) {
      $(id).datepicker('setDate', new Date());
      $('.calendar__header').text($.datepicker.formatDate('dd', new Date()));
    }
  }
}

$('.calendar').each((index, domEl) => {
  new Calendar($(domEl));
});
