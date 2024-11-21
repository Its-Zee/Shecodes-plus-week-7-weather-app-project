function refreshWeather(response) {
  let currentTemperature = document.querySelector("#temperature");
  let currentCity = document.querySelector("#current-city");
  let temperature = response.data.temperature.current;
  let cityName = response.data.city;
  let country = response.data.country;
  currentTemperature.innerHTML = Math.round(temperature);
  currentCity.innerHTML = `${cityName} , ${country}`;
}

function searchCity(city) {
  //make api call and update interface
  let apiKey = "3c7309d28c043t607b2dfaaod68ce09a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchCity("Johannesburg");
