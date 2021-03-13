let cityID= 5604473;
let appID='9db90e96623f80837ffcf7bc7b3efd6d';
const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${appID}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day =0;
    const dayofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    theFive.forEach( x=>){
            }
    let d=new Date(x.dt_txt);
console.log(d)


    document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
  }};

//     jsObject.list.forEach((hourForecast) => {
      
//       var hours = new Date(hourForecast.dt_txt).getHours();
//       if (hours == 18) {
       
//         let forTable = document.createElement("section");
//         let forecast-temp1 = document.createElement("td");
//         let forecast-temp2 = document.createElement("td");
//         let forecast-temp3 = document.createElement("td");
//         let forecast-temp4 = document.createElement("td");
//         let forecast-temp5 = document.createElement("td");

//         forecast-temp1.textContent = `<span id="imagesrc"></span> &nbsp; <img src="" alt="" id="icon">><br />${jsObject.list[0].main.temp} \xB0F`;
//         prestonHigh.textContent = `High: ${jsObject.list[0].main.temp_max} \xB0F`;
//         prestonHumid.textContent = `Humidity: ${jsObject.list[0].main.humidity} %`;
//         prestonWind.textContent = `Wind Speed: ${jsObject.list[0].wind.speed} mph`;
//         forTable.appendChild(prestonTemp);
//         forTable.appendChild(prestonHigh);
//         forTable.appendChild(prestonHumid);
//         forTable.appendChild(prestonWind);
//         document.querySelector("forTable").appendChild(forTable);
//       }
//     });
//   });
