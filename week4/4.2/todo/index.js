let globalId = 1;

// function markAsDone(todoId) {
//   const parent = document.getElementById(todoId);
//   parent.children[2].innerHTML = "Done!";
// }

function createChild(title, description, id) {
  const child = document.createElement("div");

  const firstGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;
  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;
  const thirdGrandChild = document.createElement("button");
  thirdGrandChild.innerHTML = "Mark as done";
  thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);

  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.setAttribute("id", id);
  return child;
}

function updateDomAccordingToState(state) {
  const parent = document.querySelector(".container");
  parent.innerHTML = "";

  for (let i = 0; i < state.length; i++) {
    const child = createChild(
      state[i].title,
      state[i].description,
      state[i].id
    );
    parent.appendChild(child);
  }
}

updateDomAccordingToState([
  {
    title: "Wake up at 04:00 A.M.",
    description: "Do some exercise and start with DSA and dev.",
    id: 1,
  },
  {
    title: "Wake up at 04:00 A.M.",
    description: "Do some exercise and start with DSA and dev.",
    id: 1,
  },
  {
    title: "Wake up at 04:00 A.M.",
    description: "Do some exercise and start with DSA and dev.",
    id: 1,
  },
]);

// function addTodo() {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const parent = document.querySelector(".container");

//   parent.appendChild(createChild(title, description, globalId++));
// }

/** Ugly way */
// container.innerHTML += `
//     <div>${title}</div>
//     <div>${description}</div>
//     <button>Mark as done</button>
// `;
