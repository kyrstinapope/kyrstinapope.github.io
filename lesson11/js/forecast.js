// let cityID= 5604473;
// let appID='9db90e96623f80837ffcf7bc7b3efd6d';
const forecastApiURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d";

fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var i = 0;

    jsObject.list.forEach((hourForecast) => {
      var hours = new Date(hourForecast.dt_txt).getHours();
      var day = new Date(hourForecast.dt_txt).getDay();
      var temp = hourForecast.main.temp;

      console.log(i);
      if (hours == 18) {
        // console.log(day);
        console.log(temp);
        // console.log(dayofweek[day]);

        // console.log(`dayofweek${i+1}`);

        document.getElementById(`dayofweek${i + 1}`).textContent =
          dayofweek[day];
        document.getElementById(`forecast${i + 1}`).textContent = temp;
        // document.getElementById(`imagesrc${i+1}`).setAttribute= images;
        // document.getElementById('icon').setAttribute('src', imagesrc)=jsObject.weather.icon;
        // let imagesInfo =images(jsObject.weather.icon, jsObject.weather.description);

        i++;
      }
    });
  });

//   document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
//   document.getElementById(`forecast${day+1}`).textContent = x.main.temp;

// function images(icon,description){

//   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
//   const desc = jsObject.weather.description; // note how we reference the weather array
//   document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
//   document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
//   document.getElementById('icon').setAttribute('alt', desc);
// }

const iconApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6dc037b176bf45f10d9b47e146e18667";
fetch(iconApiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        console.log(jsObject);
        // let ptemp = Math.round((jsObject.main.temp - 273.15) * (9 / 5) + 32)
        // document.getElementById('current-temp').textContent = ptemp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather.icon + '.png'; // note the concatenation
        const desc = jsObject.weather.description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });
    