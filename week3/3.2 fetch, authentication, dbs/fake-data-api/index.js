const button = document.querySelector("button");
const API = "https://fakerapi.it/api/v1/persons";
const cards = document.querySelector(".cards");

// function getAnimalData() {
//   const response = fetch(API);
//   response
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

async function getAnimalData() {
  try {
    const response = await fetch(API);
    const json = await response.json();
    printData(json.data);
    console.log(json.data[0].firstname);
  } catch (error) {
    console.log(error);
  }
}

function printData(jsonData) {
  cards.innerHTML = "";
  const html = jsonData
    .map(
      (item) => `
      <div class="card">
        <h3 class="firstName">${item.firstname}</h3>
        <h3 class="lastName">${item.lastname}</h3>
        <h3 class="email">${item.email}</h3>
      </div>
    `
    )
    .join("");
  cards.innerHTML = html;
}

button.addEventListener("click", getAnimalData);
