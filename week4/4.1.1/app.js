const one = document.querySelector(".one").value;
const two = document.querySelector(".two").value;
const button = document.querySelector("button");
const answer = document.querySelector(".answer");

let timeout;
function debouncing() {
  timeout = clearTimeout(timeout);
  setTimeout(() => {
    calculate();
  }, 100);
}

function calculate() {
  answer.innerHTML = "";
  // let inp1 = parseInt(one);
  // let inp2 = parseInt(two);
  // let solution = inp1 + inp2;
  // let solution = add(inp1, inp2);
  // answer.innerHTML = `Answer: ${solution}`;
  // console.log(inp1 + inp2);

  fetch("https://sum-server.100xdevs.com/sum?a=" + one + "&b=" + two)
    .then((response) => response.text())
    .then((ans) => (answer.innerHTML = ans));
}

async function populateDiv2() {
  const a = document.querySelector(".one").value;
  const b = document.querySelector(".two").value;
  const response = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
  );
  const ans = await response.text();
  document.querySelector(".answer").innerHTML = ans;
}

const add = (inp1, inp2) => {
  let answer = inp1 + inp2;
  return answer;
};
