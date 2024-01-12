import CreateTodo from "./components/CreateTODO";
import Todos from "./components/Todos";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
