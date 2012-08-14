(function() {

  jQuery(function() {
    var DAYS_OF_THE_WEEK, MONTHS, handleChange, handleKeyPress, one_day;
    one_day = 60 * 60 * 25 * 1000;
    DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    handleChange = function() {
      var day_of_month, days, future_date, month, today, week_day, year;
      days = parseInt($(this).val(), 10);
      if (!isNaN(days)) {
        today = new Date();
        future_date = new Date(today.getTime() + one_day * days);
        week_day = DAYS_OF_THE_WEEK[future_date.getDay()];
        day_of_month = future_date.getDate();
        month = MONTHS[future_date.getMonth()];
        year = future_date.getFullYear();
        return $('#future-date').text(week_day + ", " + month + " " + day_of_month + ", " + year);
      }
    };
    handleKeyPress = function() {
      var char;
      char = String.fromCharCode(event.keyCode);
      if (!char.match(/^[0-9]?$/)) {
        event.preventDefault();
        return $(this).change();
      }
    };
    return $("#number-of-days").focus().change(handleChange).keypress(handleKeyPress).keyup(handleChange).change();
  });

}).call(this);
