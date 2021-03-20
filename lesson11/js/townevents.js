// const requestEventsURL =
//   "https://byui-cit230.github.io/weather/data/towndata.json";

// fetch(requestEventsURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject); // temporary checking for valid response and data parsing
//    const towns = jsonObject.towns;
//     const townNames = [0];
//     // towns.forEach((jsonObject) => {
    
//       if (jsonObject.name == "Preston") {
//         let card = document.createElement("section");
//         let h2 = document.createElement("h2");
//         let event1 = document.createElement("p");
//         let event2 = document.createElement("p");
//         let event3 = document.createElement("p");

//         h2.textContent = `${jsonObject.name} Upcoming Events`;
//         event1.textContent = jsonObject.events[0];
//         event2.textContent = jsonObject.events[1];
//         event3.textContent = jsonObject.events[2];
       
//         card.appendChild(h2);
//         card.appendChild(event1);
//         card.appendChild(event2);
//         card.appendChild(event3);

//         document.querySelector(".townEvents").appendChild(card);
//       }
//       else if (jsonObject.name == "Fish Haven"){
//         let card = document.createElement("section");
//         let h2 = document.createElement("h2");
//         let p1 = document.createElement("p");
//         let p2 = document.createElement("p");
//         let p3 = document.createElement("p");

//         h2.textContent = `${jsonObject.name} Upcoming Events`;
//         p1.textContent = jsonObject.events[0];
//         p2.textContent = jsonObject.events[1];
//         p3.textContent = jsonObject.events[2];
//         card.appendChild(h2);
//         card.appendChild(p1);
//         card.appendChild(p2);
//         card.appendChild(p3);

//         document.querySelector(".cardsHome2").appendChild(card);
//       }

//      else if (jsonObject.name == "Soda Springs") {
//         let card = document.createElement("section");
//         let h2 = document.createElement("h2");
//         let p1 = document.createElement("p");
//         let p2 = document.createElement("p");
//         let p3 = document.createElement("p");

//         h2.textContent = `${jsonObject.name} Upcoming Events`;
//         p1.textContent = jsonObject.events[0];
//         p2.textContent = jsonObject.events[1];
//         p3.textContent = jsonObject.events[2];
//         card.appendChild(h2);
//         card.appendChild(p1);
//         card.appendChild(p2);
//         card.appendChild(p3);

//         document.querySelector(".cardsHome3").appendChild(card);
//       }
//     })