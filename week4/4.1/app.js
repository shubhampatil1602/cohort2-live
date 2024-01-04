const one = document.querySelector(".one");
const two = document.querySelector(".two");
const button = document.querySelector("button");
const answer = document.querySelector(".answer");

function calculate() {
  answer.innerHTML = "";
  let inp1 = parseInt(one.value);
  let inp2 = parseInt(two.value);

  // let solution = inp1 + inp2;
  let solution = add(inp1, inp2);
  answer.innerHTML = `Answer: ${solution}`;

  console.log(inp1 + inp2);
}

const add = (inp1, inp2) => {
  let answer = inp1 + inp2;
  return answer;
};
