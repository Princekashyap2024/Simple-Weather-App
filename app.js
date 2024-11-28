document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('get-weather').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }
  
  const apiKey = '6b9dac357a8b5dd9fa7a7e36b86884c9';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
      document.getElementById('weather-result').classList.remove('hidden');
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert('Error fetching weather data');
  }
});
