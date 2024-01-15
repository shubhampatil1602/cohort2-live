import { useState, useEffect } from 'react';
import Todo from './Todo';
// Task: Fetch todos after in 10 seconds and render it.
const OnClickTodo = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    const data = await fetch('https://sum-server.100xdevs.com/todos');
    const json = await data.json();
    setTodos(json.todos);
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 10000);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {todos.map((todo) => (
        <div style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        </div>
      ))}
    </div>
  );
};

export default OnClickTodo;
