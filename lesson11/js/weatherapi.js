const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(windChill);
        let card = document.createElement("div");
    let prestonTemp = document.createElement("p");
    let prestonHigh = document.createElement("p");
    let prestonHumid = document.createElement("p");
    let prestonWind = document.createElement("p");
    prestonTemp.textContent = `Current Temp: ${jsObject.main.temp} \xB0F`;
    prestonHigh.textContent = `High: ${jsObject.main.temp_max} \xB0F`;
    prestonHumid.textContent = `Humidity: ${jsObject.main.humidity} %`;
    prestonWind.textContent = `Wind Speed: ${jsObject.wind.speed} mph`;
    card.appendChild(prestonTemp);
    card.appendChild(prestonHigh);
    card.appendChild(prestonHumid);
    card.appendChild(prestonWind);

    function windChill(temp, windSpeed) {
      if (temp > 50 && windSpeed < 3) {
        windChill = "N/A";
      } else {
        var chill =
          35.74 +
          0.6215 * temp -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temp * Math.pow(windSpeed, 0.16);
        chill = Math.round(chill * 1) / 1;
      }
    }
    windChill(jsObject.main.temp, jsObject.wind.speed);
    document.querySelector(".cards").appendChild(card);
  })
