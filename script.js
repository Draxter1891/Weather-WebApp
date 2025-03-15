const apiKey = config.API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      // Updating the DOM elements
      document.getElementById("cityName").innerText = `Weather in ${data.name}`;
      document.getElementById("temp").innerText = data.main.temp;
      document.getElementById("max_temp").innerText = data.main.temp_max;
      document.getElementById("min_temp").innerText = data.main.temp_min;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("feels_like").innerText = data.main.feels_like;
      document.getElementById("wind_speed").innerText = data.wind.speed;
      document.getElementById("wind_degrees").innerText = data.wind.deg;

      // Convert Sunrise & Sunset from Unix Timestamp
      document.getElementById("rise").innerText = new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString();
      document.getElementById("set").innerText = new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString();
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong. Please try again later.");
  }
};

// Event Listener for Search Button
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page reload
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

function TopWeathers(element) {
  const text = element.innerText;
  getWeather(text);
}

const cities = [
  "Shanghai",
  "Washington",
  "Lucknow",
  "Kolkata",
  "Chennai",
  "Maharashtra",
];

const getWeatherForCities = async () => {
  for (let i = 0; i < cities.length; i++) {
    const response = await fetch(
      `${baseUrl}?q=${cities[i]}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      document.getElementById(`temp${i + 2}`).innerText = data.main.temp;
      document.getElementById(`feels_like${i + 2}`).innerText =
        data.main.feels_like;
      document.getElementById(`humidity${i + 2}`).innerText =
        data.main.humidity;
      document.getElementById(`max_temp${i + 2}`).innerText =
        data.main.temp_max;
      document.getElementById(`min_temp${i + 2}`).innerText =
        data.main.temp_min;
      document.getElementById(`wind_speed${i + 2}`).innerText = data.wind.speed;
      document.getElementById(`wind_degrees${i + 2}`).innerText = data.wind.deg;
      document.getElementById(
        `rise${cities[i].slice(0, 2).toLowerCase()}`
      ).innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      document.getElementById(
        `set${cities[i].slice(0, 2).toLowerCase()}`
      ).innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    }
  }
};

// Fetch weather data when the page loads
window.onload = getWeatherForCities;
