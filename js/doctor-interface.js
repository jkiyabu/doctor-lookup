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
        doctorsList.getDoctors(doctorName, condition);
    });
});
