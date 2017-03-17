var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
    $('#condition-form').submit(function() {
        event.preventDefault();
        var condition = $('#condition').val();
        $('#condition').val('');
        $('#show-doctors').empty();
        var doctorsList = new Doctor();
        doctorsList.getDoctors(condition);
    });
});
