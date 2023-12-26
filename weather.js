// function getWeather() {
//   const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
//   const locationInput = document.getElementById('locationInput');
//   const weatherInfo = document.getElementById('weatherInfo');

//   const location = locationInput.value;

//   if (!location) {
//     alert('Please enter a location');
//     return;
//   }

//   // Use the new API call with latitude and longitude placeholders
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       // Handle the retrieved weather data and update the UI
//       const temperature = data.main.temp;
//       const description = data.weather[0].description;
//       const cityName = data.name;

//       weatherInfo.innerHTML = `<p>Temperature in ${cityName}: ${temperature}°C</p>
//                                <p>Weather: ${description}</p>`;
//     })
//     .catch(error => {
//       console.error('Error fetching weather data:', error);
//       alert('Error fetching weather data. Please try again.');
//     });
// }