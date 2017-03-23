var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#condition-form').submit(function() {
    event.preventDefault();
    var condition = $('#condition').val();
    var doctorName = $('#doctor-name').val();
    $('#condition').val('');
    $('#doctor-name').val('');
    $('#show-doctors').empty();
    var doctorsList = new Doctor();
    doctorsList.getDoctors(doctorName, condition, function() {
      $('#available').text('List of doctors for in the Portland area:');
      for (i = 0; i < response.data.length; i++) {
        $('#show-doctors').append('<li>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name  + '</li>');
      }
    });
  });
});
