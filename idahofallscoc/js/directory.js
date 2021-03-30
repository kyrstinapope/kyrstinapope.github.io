const requestURL =
  "https://kyrstinapope.github.io/idahofallscoc/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];
    for (let i = 0; i < businesses.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let img = document.createElement("img");

      h2.textContent = businesses[i].name;
      p.textContent = "Address:" + " " + businesses[i].address;
      p2.textContent = "Phone Number:" + " " + businesses[i].phone;
      p3.textContent = "Hours:" + " " + businesses[i].hours;
      p4.textContent = "Website:" + " " + businesses[i].website;
      img.setAttribute("src", businesses[i].photo);
      img.setAttribute(
        "alt",
        businesses[i].name
      );

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(img);

      document.querySelector("div.cards").appendChild(card);
    }
  });
