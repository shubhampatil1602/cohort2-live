import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Wake up early",
      description: "Do some exercise and start with DSA or Dev",
      completed: false,
    },
    {
      title: "Wake up at 7",
      description: "start with DSA or Dev",
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "Go for walk",
        description: "start with DSA or Dev",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} />

      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;

// let state = {
//   count: 0,
// };

// function onClickHandler() {
// state.count++;
// console.log(state.count);
// }

// const [count, setCount] = useState(0);
// 0 is the initial value of count. setCount is a callback which is use to update the value of count.

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }
