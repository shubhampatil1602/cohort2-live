import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const dummyTodos = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description 6',
  },
  {
    id: 7,
    title: 'Title 7',
    description: 'Description 7',
  },
];

app.get('/todos', (req, res) => {
  let randomLength = Math.round(Math.random() * dummyTodos.length) + 1;

  const randomLengthOfTodos = dummyTodos.length - randomLength + 1;

  const newArr = [];
  for (let i = 0; i < randomLengthOfTodos; i++) {
    newArr.push(dummyTodos[i]);
  }

  res.json(newArr);
});

app.listen(3002, () => console.log(`http://localhost:3002/todos/`));
