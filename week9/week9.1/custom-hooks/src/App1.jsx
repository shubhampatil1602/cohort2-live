import axios from 'axios';
import { useEffect, useState } from 'react';

function useTodos(n) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
        setTodos(res.data.todos);
      });
    }, n * 1000);

    axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
      setTodos(res.data.todos);
    });

    return () => clearInterval(value); // clean up on unmount
  }, [n]);
  return { todos };
}

function App1() {
  const { todos } = useTodos(5);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App1;
