const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.main);
    console.log(jsObject.main.temp);
    console.log(jsObject.main.feels_like);
    console.log(jsObject.main.temp_max);
    console.log(jsObject.main.pressure);
    console.log(jsObject.main.humidity);
    console.log(jsObject.wind.speed);
    let card = document.createElement("section");
    let prestonTemp = document.createElement("p");
    let prestonHigh = document.createElement("p");
    let prestonHumid = document.createElement("p");
    let prestonWind = document.createElement("p");
    prestonTemp.textContent = `Current Temp: ${jsObject.main.temp}`;
    prestonHigh.textContent = `High: ${jsObject.main.temp_max}`;
    prestonHumid.textContent = `Humidity: ${jsObject.main.humidity}`;
    prestonWind.textContent = `Wind Speed: ${jsObject.wind.speed}`;

    card.appendChild(prestonTemp);
    card.appendChild(prestonHigh);
    card.appendChild(prestonHumid);
    card.appendChild(prestonWind);
    document.querySelector(".cards").appendChild(card);
  });
