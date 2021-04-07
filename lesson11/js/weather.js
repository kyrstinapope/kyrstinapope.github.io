
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(windChill);
      let card = document.createElement("section");
      let prestonTemp = document.createElement("p");
      let prestonHigh = document.createElement("p");
      let prestonHumid = document.createElement("p");
      let prestonWind = document.createElement("p");
      prestonTemp.textContent = `Current Temp: ${jsObject.main.temp} \xB0F`;
      prestonHigh.textContent = `High: ${jsObject.main.temp_max} \xB0F`;
      prestonHumid.textContent = `Humidity: ${jsObject.main.humidity} %`;
      prestonWind.textContent = `Wind Speed: ${jsObject.wind.speed} mph`;

      let chocolate = windChill(jsObject.main.temp, jsObject.wind.speed);

      card.appendChild(prestonTemp);
      card.appendChild(prestonHigh);
      card.appendChild(prestonHumid);
      card.appendChild(prestonWind);

      document.querySelector(".cards").appendChild(card);
      document.getElementById("chill").textContent = chocolate;
    });

function windChill(temp, windSpeed) {
  let chill = 0;
  if (temp <= 50 && windSpeed > 3) {
    chill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);
    chill = Math.round(chill * 1) / 1;
  } else {
    chill = "N/A";
  }
  return chill;
}

// var book = document.title;

// if (book == "Preston") {
//   nothing(5604473);
// } else if (book == "Soda Springs") {
//   nothing(5607916);
// } else if (book == "Fish Haven") {
//   nothing(5585010);
// }
