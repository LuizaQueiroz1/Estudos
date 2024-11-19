const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "bc25dad6f56d52e6c01e93412b5ef243";

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const inputElement = document.getElementById("input");

const button = document.querySelector("button");

//functions

async function checkWeather(city) {
  const apiWeatherUrlWithParams = `${apiURL}?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(apiWeatherUrlWithParams);

    // Check for successful response
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Handle missing weather data
    if (!data.weather || !data.weather[0] || !data.weather[0].main) {
      throw new Error("Missing weather data in response");
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    showError(error.message); // Call a function to display an error message
    // Indicate error or handle it differently
    if (data.weather[0].main === "Clouds") {
      imagesWeather.src = "images-weather/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      imagesWeather.src = "images-weather/drizzle.png";
    } else if (data.weather[0].main === "Humidity") {
      imagesWeather.src = "images-weather/humidity.png";
    } else if (data.weather[0].main === "Mist") {
      imagesWeather.src = "images-weather/mist.png";
    } else if (data.weather[0].main === "Rain") {
      imagesWeather.src = "images-weather/rain.png";
    } else if (data.weather[0].main === "Snow") {
      imagesWeather.src = "images-weather/snow.png";
    } else if (data.weather[0].main === "Wind") {
      imagesWeather.src = "images-weather/wind.png";
    } else {
      console.log("wrong");
    }
    console.log(data.weather[0].main);
    // console.log(imagesWeather);
  }
}

async function showWeatherDate(input) {
  const city = input.value;
  console.log(city);
  const data = await checkWeather(city);
  cityElement.innerHTML = data.weather[0].name;
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

// console.log(windElement);

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
