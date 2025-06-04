const apiKey = "8a1130ad31ab12ef6d921eaef41b7573";
const city = "Lilongwe";
const units = "metric"; // Celsius

async function fetchWeather() {
  // Fetch current weather
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},MW&appid=${apiKey}&units=${units}`;
  // Fetch 3-day forecast (OpenWeatherMap 5-day/3-hour forecast)
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},MW&appid=${apiKey}&units=${units}`;

  const [currentRes, forecastRes] = await Promise.all([
    fetch(currentUrl),
    fetch(forecastUrl)
  ]);

  if (!currentRes.ok || !forecastRes.ok) {
    console.error("Failed to fetch weather data");
    return;
  }

  const currentData = await currentRes.json();
  const forecastData = await forecastRes.json();

  renderWeather(currentData, forecastData);
}

function renderWeather(current, forecast) {
  const weatherSection = document.querySelector('.weather-section');
  if (!weatherSection) return;

  // Current weather
  const temp = Math.round(current.main.temp);
  const desc = current.weather[0].description;
  const icon = current.weather[0].icon;

  // Forecast: get next 3 days at 12:00
  const forecastList = forecast.list.filter(item => item.dt_txt.includes("12:00:00"));
  const days = forecastList.slice(0, 3).map(item => {
    const date = new Date(item.dt_txt);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'long' }),
      temp: Math.round(item.main.temp),
      desc: item.weather[0].description,
      icon: item.weather[0].icon
    };
  });

  weatherSection.innerHTML = `
    <div class="current-weather">
      <h2>Current Weather in Lilongwe</h2>
      <div class="weather-main">
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" width="75" length="75"/>
      </div>
      <span class="temp">${temp}&deg;C</span>
      <div class="description">${desc.charAt(0).toUpperCase() + desc.slice(1)}</div>
    </div>
    <div class="forecast">
      <h4>3-Day Forecast</h4>
      <div class="forecast-days">
        ${days.map(day => `
          <div class="forecast-day">
            <div class="forecast-label">${day.day}</div>
            <img src="https://openweathermap.org/img/wn/${day.icon}@2x.png" alt="${day.desc}" width="50" lenghth="50" />
            <div class="forecast-temp">${day.temp}&deg;C</div>
            <div class="forecast-desc">${day.desc.charAt(0).toUpperCase() + day.desc.slice(1)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', fetchWeather);