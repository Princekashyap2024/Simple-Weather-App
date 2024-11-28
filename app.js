// Dark Mode Toggle
const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Fetch Weather Functionality
document.getElementById("getWeatherButton").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "0fa6c10403a7384559fd9c99e5bcf853";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found!");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Display Weather Data
function displayWeather(data) {
    const weatherOutput = document.getElementById("weatherOutput");
    weatherOutput.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}
