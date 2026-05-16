async function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "e85acba7f1f5953943171f15afd9597b"; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText =
      "Temperature: " + data.main.temp + "°C";
    document.getElementById("condition").innerText =
      "Condition: " + data.weather[0].description;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    console.error("Full error:", error);
    alert("Error fetching data. Check API key or internet.");
  }
}