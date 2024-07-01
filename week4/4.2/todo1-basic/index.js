function addTodo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const container = document.querySelector('.container');
  createTodo(title, description, container);
}

function createTodo(title, description, container) {
  const div = document.createElement('div');
  div.classList.add('todo');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const done = document.createElement('button');

  h3.innerHTML = title;
  p.innerHTML = description;
  done.innerHTML = 'Mark as done';
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(done);
  container.appendChild(div);
}

/*
<div className="container">
  <div>
    <h3>Title</h3>
    <p>Des</p>
    <button>Mark as done</button>
  </div>
</div>
*/
