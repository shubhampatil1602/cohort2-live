const capital = document.querySelector("#capital");
const years = document.querySelector("#years");
const interest = document.querySelector("#interest");
const submit = document.querySelector("#submit");
const h2 = document.createElement("h2");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const amount = document.querySelector(".amount");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let result = (capital.value * years.value * interest.value) / 100;
  p1.innerHTML = `Capital: ${capital.value}`;
  p2.innerHTML = `Profit: ${result}`;
  h2.innerHTML = `Capital + Profit = ${parseInt(capital.value) + result}`;
  amount.appendChild(p1);
  amount.appendChild(p2);
  amount.appendChild(h2);
});

// let capital = 100000;
// let years = 5;
// let interest = 8;

// let output = (capital * years * interest) / 100;
// console.log(output);
