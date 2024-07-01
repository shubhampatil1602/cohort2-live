async function fetchTodos() {
  const res = await fetch('http://localhost:3002/todos/');
  const json = await res.json();
  updateTodoAccordingToState(json);
}

setInterval(fetchTodos, 2500);
// fetchTodos();

function updateTodoAccordingToState(state) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  state.map((todo) => {
    const randomTodos = createTodo(todo.title, todo.description, todo.id);
    container.appendChild(randomTodos);
  });
}

// BTS of what react does but more efficiently...
function createTodo(title, description, id) {
  const todo = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const markAsDone = document.createElement('button');

  h3.innerHTML = title;
  p.innerHTML = description;
  markAsDone.innerHTML = 'Mark as done.';

  todo.setAttribute('class', 'todo');
  todo.setAttribute('id', id);
  todo.appendChild(h3);
  todo.appendChild(p);
  todo.appendChild(markAsDone);

  return todo;
}
