const geocode = require('./geocode')
const forecast = require('./forecast')

geocode('Brasiliasasaa', (error, [longitude, latitude] = []) => {
  if(error) {
    console.log(`Error: ${error}`);
    return;
  }
  forecast(latitude, longitude, (error, response) => {
    if(error) {
      console.log(`Error: ${error}`);
      return;
    }
    console.log(response);
  });
});