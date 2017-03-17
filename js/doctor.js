var apiKey = require('./../.env').apiKey;

Doctor = function() {
}

Doctor.prototype.getDoctors = function(condition) {
    console.log('getDoctors');
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
        if (response.data.length === 0){
            $('#show-doctors').append('no doctors available');
        } else {
            for (i = 0; i < response.data[0].practices.length; i++) {
                $('#show-doctors').append('<li>' + response.data[0].practices[i].name  + '</li>');
            }
        }
    })
    .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
