$(document).ready(function() {
  $('#condition-form').submit(function() {
    event.preventDefault();
    var condition = $('#condition').val();
    $('#show-doctors').text("You entered " + condition + " as a medical condition");
  });
});
