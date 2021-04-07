const forecastApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=43.4666&lon=-112.0341&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d`;

fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var i = 0;
    for (let j = 0; j < jsObject.daily.length; j++) {
      let dailyFor = jsObject.daily[j];
      let unix_timestamp = dailyFor.dt;
      var date = new Date(unix_timestamp * 1000);
      console.log(date);
      var hours = new Date(date).getHours();
      console.log(hours);
      var day = new Date(date).getDay();
      console.log(day);
      var temp = dailyFor.temp.day;
      const imagesrc =
        "https://openweathermap.org/img/w/" + dailyFor.weather[0].icon + ".png"; // note the concatenation
      const desc = dailyFor.weather[0].description; // note how we reference the weather array
      console.log("hello" + day);
      console.log(i);
                 document.getElementById(`daysofweek${i + 1}`).textContent =
         dayofweek[day];
      document.getElementById(`forecast${i + 1}`).textContent = temp;
      document.getElementById(`icon${i + 1}`).src = imagesrc;
      document.getElementById(`icon${i + 1}`).alt = desc;
          i++;
    }

     });

