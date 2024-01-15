import { useState } from 'react';
import Header from './Header';
import HeaderWithButton from './HeaderWithButton';
import Todo from './Todo';
// Task: Iterate 3 todos from a state variable and render it using map function. Create a button and on click of that a new todo should render.
function App2() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: 'Introduction',
      description: 'A brief overview of the topic.',
    },
    {
      id: Math.random(),
      title: 'Features',
      description: 'Key features and functionalities.',
    },
    {
      id: Math.random(),
      title: 'Conclusion',
      description: 'Final thoughts and summary.',
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: 'Wake up early.',
        description: 'Do exercise and start with wedev or dsa.',
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add new todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

export default App2;

// <HeaderWithButton />
// <Header title='Jay Shree Ram' />
// <Header title='Jay Hanuman Dada' />
// <Header title='Om Namah Shivaay' />
// <Header title='Shree Shivaay Namah Stubhyam' />
