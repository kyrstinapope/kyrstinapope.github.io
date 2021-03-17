
  function everything (cityId){
    // let cityID= 5604473;
    // let appID='9db90e96623f80837ffcf7bc7b3efd6d';
    const forecastApiURL =
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=9db90e96623f80837ffcf7bc7b3efd6d`;
    
    fetch(forecastApiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
      
        const dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        var i = 0;
    
    
        for( let j= 0; j < jsObject.list.length; j++ ) {
          let dailyFor = jsObject.list[j];
          var hours = new Date(dailyFor.dt_txt).getHours();
          var day = new Date(dailyFor.dt_txt).getDay();
          var temp = dailyFor.main.temp;
          const imagesrc = 'https://openweathermap.org/img/w/' + dailyFor.weather[0].icon + '.png'; // note the concatenation
          const desc = dailyFor.weather[0].description; // note how we reference the weather array
    
          console.log(i);
          if (hours == 18) {
            // console.log(day);
            console.log(temp);
            // console.log(dayofweek[day]);
    
            // console.log(`dayofweek${i+1}`);
    
            document.getElementById(`dayofweek${i + 1}`).textContent = dayofweek[day];
            document.getElementById(`forecast${i + 1}`).textContent = temp;
            document.getElementById(`icon${i+1}`).src = imagesrc;
            document.getElementById(`icon${i+1}`).alt= desc;
            // document.getElementById('icon').setAttribute('src', imagesrc)=jsObject.list.weather.icon;
            // let imagesInfo =images(jsObject.list.weather.icon, jsObject.list.weather.description);
    
            i++;
          }
        }
        });
      }
    
    //   document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
    //   document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
    
    // function images(icon,description){
    
    //   
    //   const desc = jsObject.weather.description; // note how we reference the weather array
    //   document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    //   document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    //   document.getElementById('icon').setAttribute('alt', desc);
    // }
    
    // const iconApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6dc037b176bf45f10d9b47e146e18667";
    // fetch(iconApiURL)
    //     .then((response) => response.json())
    //     .then((jsObject) => {
    
    //         console.log(jsObject);
    //         // let ptemp = Math.round((jsObject.main.temp - 273.15) * (9 / 5) + 32)
    //         // document.getElementById('current-temp').textContent = ptemp;
    //         const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list.weather.icon + '.png'; // note the concatenation
    //         const desc = jsObject.listweather.description; // note how we reference the weather array
    //         document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    //         document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    //         document.getElementById('icon').setAttribute('alt', desc);
    //     });
        
    everything(5585010)
    
    // var preston= 5604473;
    // var soda=5607916;
    // var fish=5585010;
    // if(
    //   window.location.url.indexOf() > 0
    //   ){
    //    function everything()
    // }