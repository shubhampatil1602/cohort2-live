import React, { useState, useEffect } from 'react';
// Task: Fetch random todos and render it.
const RandomTodos = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    const data = await fetch('https://sum-server.100xdevs.com/todos');
    const json = await data.json();
    setTodos(json.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ border: '1px solid', margin: '10px', padding: '10px' }}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomTodos;
