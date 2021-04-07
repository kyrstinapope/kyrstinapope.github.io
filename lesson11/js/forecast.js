function everything(cityId) {
  // let cityID= 5604473;
  // let appID='9db90e96623f80837ffcf7bc7b3efd6d';
  const forecastApiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d`;

  fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

      const dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      var i = 0;

      for (let j = 0; j < jsObject.list.length; j++) {
        let dailyFor = jsObject.list[j];
        var hours = new Date(dailyFor.dt_txt).getHours();
        var day = new Date(dailyFor.dt_txt).getDay();
        var temp = dailyFor.main.temp;
        const imagesrc =
          "https://openweathermap.org/img/w/" +
          dailyFor.weather[0].icon +
          ".png"; // note the concatenation
        const desc = dailyFor.weather[0].description; // note how we reference the weather array
console.log(day);
        console.log(i);
        if (hours == 18) {
          // console.log(day);
          console.log(temp);
          // console.log(dayofweek[day]);

          // console.log(`dayofweek${i+1}`);

          document.getElementById(`dayofweek${i + 1}`).textContent =
            dayofweek[day];
          document.getElementById(`forecast${i + 1}`).textContent = temp;
          document.getElementById(`icon${i + 1}`).src = imagesrc;
          document.getElementById(`icon${i + 1}`).alt = desc;
          // document.getElementById('icon').setAttribute('src', imagesrc)=jsObject.list.weather.icon;
          // let imagesInfo =images(jsObject.list.weather.icon, jsObject.list.weather.description);

          i++;
        }
      }
    });
}


var page = document.title;

console.log("chocolate" + page);
if (page == "Preston") {
  everything(5604473);
} else if (page == "Soda Springs") {
  everything(5607916);
} else if (page == "Fish Haven") {
  everything(5585010);
}
