// create 4 buttons {1,2,3,4} => on each click of a specific number a todo with that number's id should display. For eg: if button1 is clicked then todo with id 1 should display and so on..

import { useState, useEffect } from 'react';
import axios from 'axios';

const Three = () => {
  const [todoId, setTodoId] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setTodoId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setTodoId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setTodoId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setTodoId(4);
        }}
      >
        4
      </button>

      <Todo id={todoId} />
    </div>
  );
};

const Todo = ({ id }) => {
  const [todo, setTodo] = useState([]);

  const fetchTodo = () => {
    axios
      .get('https://sum-server.100xdevs.com/todo?id=' + id)
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  useEffect(() => {
    fetchTodo();
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
};

export default Three;
