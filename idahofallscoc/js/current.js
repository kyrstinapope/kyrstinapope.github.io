const currentApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=43.4666&lon=-112.0341&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d`;

fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var i = 0;
    for (let j = 0; j < jsObject.current.weather.length; j++) {
      let dailyWeath = jsObject.current;
      console.log(dailyWeath);
      var temp = dailyWeath.temp;
      console.log(temp);
      var humid = dailyWeath.humidity;
      console.log(humid);
      const imagesrc =
        "https://openweathermap.org/img/w/" +
        dailyWeath.weather[0].icon +
        ".png"; // note the concatenation

      const desc = dailyWeath.weather[0].description; // note how we reference the weather array

      document.getElementById(`currentTemp`).textContent = temp;
      document.getElementById(`currentHum`).textContent = humid;
      document.getElementById(`conditionDesc`).textContent = desc;
      document.getElementById(`icon`).src = imagesrc;
      document.getElementById(`conditionDesc`).alt = desc;
      i++;
    }
  });
