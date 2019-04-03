$( function() {
    $( ".datepicker" ).datepicker({
        dayNamesMin: ["SUN", "MON" , "TUE" , "WED" , "THU" , "FRI" , "SAT"],
        firstDay:1,
        showButtonPanel:true,
        showOtherMonths:true,
        altFormat:"d",
    });
    var currentWeekday = $.datepicker.formatDate('dd', new Date());
    $('.calendar__header').text(currentWeekday);
    this.$currentDay = $.datepicker.formatDate("d", new Date());
} );
