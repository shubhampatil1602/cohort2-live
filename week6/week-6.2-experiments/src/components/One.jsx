// Fetch todos and render.

import { useState, useEffect } from 'react';
import axios from 'axios';

const One = ({ id }) => {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    // const fetchData = await fetch('https://sum-server.100xdevs.com/todos');
    // const data = await fetchData.json();
    // setTodo(data.json);

    axios
      .get('https://sum-server.100xdevs.com/todos')
      .then((res) => {
        setTodos(res.data.todos);
        // console.log(res.data.todos);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
};

export default One;
