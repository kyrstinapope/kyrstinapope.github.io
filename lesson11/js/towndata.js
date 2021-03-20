const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const towns = jsonObject.towns;

    towns.forEach((jsonObject) => {
      if (
        jsonObject.name == "Preston" ||
        jsonObject.name == "Fish Haven" ||
        jsonObject.name == "Soda Springs"
      ) {
        console.log(jsonObject.name);
        console.log(jsonObject.motto);
        console.log(jsonObject.yearFounded);
        console.log(jsonObject.currentPopulation);
        console.log(jsonObject.averageRainfall);
        console.log(jsonObject.events);
        let card = document.createElement("section");
        let townImage = document.createElement("img");
        let h2 = document.createElement("h2");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        

        townImage.src =`./images/${jsonObject.photo}`;
        townImage.alt =`${jsonObject.name} image`; 
        h2.textContent = jsonObject.name;
        p2.textContent = jsonObject.motto;
        p3.textContent = `Year Founded: ${jsonObject.yearFounded}`;
        p4.textContent = `Population: ${jsonObject.currentPopulation}`;
        p5.textContent = `Annual Rain Fall: ${jsonObject.averageRainfall}`;
        p6.textContent = `Upcoming Events:  ${jsonObject.events}`;
      
        card.appendChild(townImage);
        card.appendChild(h2);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(p6);

         document.querySelector(".cardsHome").appendChild(card);
      }
    });
  });
