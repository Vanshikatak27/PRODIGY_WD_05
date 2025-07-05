async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherResult");
  weatherBox.innerHTML = "";

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "588cc34f6a304303a89161242250507"; // Replace this with your real key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const content = `
      <h2>${data.location.name}, ${data.location.region}</h2>
      <p>🌡 Temperature: ${data.current.temp_c}°C</p>
      <p>🌥 Condition: ${data.current.condition.text}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>🌬 Wind: ${data.current.wind_kph} kph</p>
    `;

    weatherBox.innerHTML = content;
  } catch (error) {
    console.error(error);
    weatherBox.innerHTML = `<p>❌ Could not fetch weather data. Please check the city name or try again later.</p>`;
  }
}


