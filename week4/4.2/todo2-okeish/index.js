/*
<div className="container">
  <div class="todo" id="">
    <h3>Title</h3>
    <p>Des</p>
    <button>Mark as done</button>
  </div>
</div>
*/

let id = 1;
function addTodo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const container = document.getElementById('container');

  const todo = createTodo(title, description, id++);
  container.appendChild(todo);
}

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
  markAsDone.setAttribute('onclick', `done(${id})`);

  return todo;
}

function done(todoId) {
  const todoDiv = document.getElementById(todoId);
  todoDiv.children[2].innerHTML = 'Done!';
  id++;
}
