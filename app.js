const apiKey = '6b9dac357a8b5dd9fa7a7e36b86884c9';
const weatherDiv = document.getElementById('weather');
const button = document.getElementById('getWeather');

button.addEventListener('click', async () => {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    weatherDiv.innerHTML = `<p class="error">Please enter a city name!</p>`;
    return;
  }

  try {
    // Fetch weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherDiv.innerHTML = `<p class="error">${error.message}</p>`;
  }
});

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherDiv.innerHTML = `
    <div class="weather-info">
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Weather:</strong> ${weather[0].description}</p>
    </div>
  `;
}
