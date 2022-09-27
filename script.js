const API_KEY = "5bafe0240fcb028bdf4d3051005e0b48";
const container = document.querySelector(".container");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}&units=imperial`;

fetch(url)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log("feels like: " + data["main"]["feels_like"]);
    console.log("Pressure: " + data["main"]["pressure"]);
    console.log("Temp: " + data["main"]["temp"]);
    console.log("Humidity: " + data["main"]["humidity"]);

    //TODO Convert to normal time
    console.log("Sunrise: " + data["sys"]["sunrise"]);
    console.log("Sunset: " + data["sys"]["sunset"]);

    console.log("City: " + data["name"]);
    createCard(data);
  });

function createCard(data) {
  const card = document.createElement("div");
  card.innerHTML = `<h2>${data["name"]}</h2>
  <h4>feels like: ${data["main"]["feels_like"]}</h4>
  <h4>Temp: ${data["main"]["temp"]}</h4>
  <h4>Humidity: ${data["main"]["humidity"]}</h4>
  <h4>Pressure: ${data["main"]["pressure"]}</h4>
  <h4>Wind: ${data["wind"]["speed"]}</h4>
  <h4>Sunrise: ${data["sys"]["sunrise"]}</h4>
  <h4>Sunset: ${data["sys"]["sunset"]}</h4>`;
  container.appendChild(card);
}
