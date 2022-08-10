const API_KEY = "ca76b2c004359546488727983687c841"
const weather = document.querySelector("#weather");

function paintWeather(weatherData) {
  

  console.log(weatherData)
  const city = weatherData.name;
  const temprature = weatherData.main.temp
  const status = weatherData.weather[0].description

  weather.innerHTML = `${city}, ${temprature}C°, ${status}`
}

function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr&units=metric`

  fetch(url).then(response => response.json()).then(data => paintWeather(data));
}

function onGeoFailed() {
  weather.innerHTML = "Je suis désolé de ne pas le réussir."
}

weather.innerHTML = "Attendez, s'il vous plaît. Je suis en train d'essayer de porter des données."
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);