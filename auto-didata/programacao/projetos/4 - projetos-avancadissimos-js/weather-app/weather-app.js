const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "64be4ead9347566b83ba7fad843d1167";

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const inputElement = document.getElementById("input");

const button = document.querySelector("button");

//functions

async function checkWeather(city) {
  const apiWeatherUrlWithParams = `${apiURL}?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiWeatherUrlWithParams);
  if (response.status == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector("#weather").style.display = "none";
  } else {
    const data = await response.json();

    const imagesWeather = document.querySelector(".weather-icons");

    if (data.weather[0].main == "Clouds") {
      imagesWeather.src = `images-weather/clouds.png`;
    } else if (data.weather[0].main == "Drizzle") {
      imagesWeather.src = "images-weather/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      imagesWeather.src = "images-weather/humidity.png";
    } else if (data.weather[0].main == "Mist") {
      imagesWeather.src = "images-weather/mist.png";
    } else if (data.weather[0].main == "Rain") {
      imagesWeather.src = "images-weather/rain.png";
    } else if (data.weather[0].main == "Snow") {
      imagesWeather.src = "images-weather/snow.png";
    } else if (data.weather[0].main == "Wind") {
      imagesWeather.src = "images-weather/wind.png";
    } else {
      console.log("wrong");
    }
    console.log(imagesWeather);
  }
}

async function showWeatherDate(input) {
  const city = input.value;
  console.log(city);
  const data = await checkWeather(city);
  cityElement.innerHTML = data.name;
  tempElement.innerHTML = Math.round(data.main.temp) + "°c";
  humidityElement.innerHTML = data.main.humidity + "%";
  windElement.innerHTML = data.wind.speed + "Km/h";

  const flag = document.getElementById("flag-img");
  flag.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/flat/64.png`
  );

  document.getElementById("weather").style.display = "block";
}

console.log(windElement);

//EVENTS

button.addEventListener("click", () => {
  showWeatherDate(inputElement);
});

inputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    showWeatherDate(inputElement);
  }
});

// const body = document.getElementById("body").addEventListener("click", () => {
//   weatherElement.style.display = "none";
// });
