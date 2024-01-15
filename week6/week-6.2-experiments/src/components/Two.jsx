// Fetch todos according to id and render.
import { useState, useEffect } from 'react';
import axios from 'axios';

const Two = ({ id }) => {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    axios
      .get('https://sum-server.100xdevs.com/todos?id=' + id)
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
  // console.log(todos);

  return (
    <div>
      {todos
        .filter((todo) => todo.id === id)
        .map((todo) => (
          <Todo key={id} title={todo.title} description={todo.description} />
        ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
};

export default Two;
