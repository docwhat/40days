# Copyright (c) 2012-2013 Christian Höltje
#
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to
# use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
# of the Software, and to permit persons to whom the Software is furnished to do
# so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

jQuery ->
  one_hour = 60 * 60 * 1000
  one_day = 24 * one_hour

  DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']

  handleChange = ->
    days = parseInt($(this).val(), 10)
    days = 0 if isNaN(days)

    today = new Date()
    future_date = new Date(today.getTime() + one_day * days)
    week_day = DAYS_OF_THE_WEEK[future_date.getDay()]
    day_of_month = future_date.getDate()
    month = MONTHS[future_date.getMonth()]
    year = future_date.getFullYear()
    $('#future-date').text(week_day + ", " + month + " " + day_of_month + ", " + year)

  handleKeyDown = ->
    adjust = 0
    if event.keyCode == 38 # Up
      adjust = 1
    else if event.keyCode == 40 # down
      adjust = -1
    else if event.keyCode == 33 # down
      adjust = 10
    else if event.keyCode == 34 # down
      adjust = -10

    if adjust != 0
      new_value = parseInt($(this).val(), 10) + adjust
      if isNaN(new_value)
        new_value = adjust
      if new_value >= 0 && new_value <= 999
        $(this).val(new_value)
        event.preventDefault()
        $(this).change()

  handleKeyPress = ->
    char = String.fromCharCode event.keyCode
    if !char.match(/^[0-9]?$/)
      event.preventDefault()
      $(this).change()

  hourlyUpdate = ->
    $("#number-of-days").change()

  $("#number-of-days")
    .focus()
    .change(handleChange)
    .keydown(handleKeyDown)
    .keypress(handleKeyPress)
    .keyup(handleChange)
    .change()

  window.setInterval hourlyUpdate, one_hour

