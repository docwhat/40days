(function() {

  jQuery(function() {
    var DAYS_OF_THE_WEEK, MONTHS, handleChange, handleKeyDown, handleKeyPress, hourlyUpdate, one_day, one_hour;
    one_hour = 60 * 60 * 1000;
    one_day = 24 * one_hour;
    DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    handleChange = function() {
      var day_of_month, days, future_date, month, today, week_day, year;
      days = parseInt($(this).val(), 10);
      if (isNaN(days)) {
        days = 0;
      }
      today = new Date();
      future_date = new Date(today.getTime() + one_day * days);
      week_day = DAYS_OF_THE_WEEK[future_date.getDay()];
      day_of_month = future_date.getDate();
      month = MONTHS[future_date.getMonth()];
      year = future_date.getFullYear();
      return $('#future-date').text(week_day + ", " + month + " " + day_of_month + ", " + year);
    };
    handleKeyDown = function(event) {
      var adjust, new_value;
      adjust = 0;
      if (event.keyCode === 38) {
        adjust = 1;
      } else if (event.keyCode === 40) {
        adjust = -1;
      } else if (event.keyCode === 33) {
        adjust = 10;
      } else if (event.keyCode === 34) {
        adjust = -10;
      }
      if (adjust !== 0) {
        new_value = parseInt($(this).val(), 10) + adjust;
        if (isNaN(new_value)) {
          new_value = adjust;
        }
        if (new_value >= 0 && new_value <= 999) {
          $(this).val(new_value);
          event.preventDefault();
          return $(this).change();
        }
      }
    };
    handleKeyPress = function(event) {
      var char;
      char = String.fromCharCode(event.keyCode);
      if (!char.match(/^[0-9]?$/)) {
        event.preventDefault();
        return $(this).change();
      }
    };
    hourlyUpdate = function() {
      return $("#number-of-days").change();
    };
    $("#number-of-days").focus().change(handleChange).keydown(handleKeyDown).keypress(handleKeyPress).keyup(handleChange).change();
    return window.setInterval(hourlyUpdate, one_hour);
  });

}).call(this);
