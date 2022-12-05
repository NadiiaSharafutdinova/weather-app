let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
  let city = prompt("Enter a city");
  city = city.toLowerCase();
  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let tempCelsius = Math.round(temperature);
    let tempFahrenheit = Math.round((temperature * 9) / 5 + 32);
  
    alert(
      `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDate.getDay()];

let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let nowTime = document.querySelector(".time");
nowTime.innerHTML = `${day}, ${hour}:${minute}`;

function displayCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = cityInput.value;
}
let search = document.querySelector(".search-form");
search.addEventListener("submit", displayCity)
