function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10";  // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        document.getElementById("weather-info").innerHTML = `<p style="color: red;">Please enter a city name.</p>`;
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-info").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById("weather-info").innerHTML = `<p style="color: red;">City not found.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("weather-info").innerHTML = `<p style="color: red;">Error fetching weather data. Please try again.</p>`;
        });
}
