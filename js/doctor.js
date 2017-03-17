var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

Doctor.prototype.getDoctors = function(doctorName, condition) {
  console.log('getDoctors');

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + doctorName + '&query=' + condition + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    if (response.data.length === 0 || (doctorName === '' && condition == '')){
      $('#available').empty();
      $('#show-doctors').text('Sorry, no doctors available');
    } else {
      $('#available').text('List of doctors for in the Portland area:');
      for (i = 0; i < response.data.length; i++) {
          $('#show-doctors').append('<li>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name  + '</li>');
      }
    }
  })
  .fail(function(error){
    console.log("fail");
  });
};
exports.doctorModule = Doctor;
