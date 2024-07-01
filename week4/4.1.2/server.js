import express from 'express';
import cors from 'cors';

const app = express();

// app.use(express.json());
app.use(cors());

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send(sum.toString());
});

app.get('/interest', (req, res) => {
  const { principal, rate, time } = req.query;
  const interest =
    parseInt(principal) * (parseInt(rate) / 100) * parseInt(time);
  const total = +principal + +interest;
  res.json({
    total,
    interest,
  });
});

app.listen(3001, () => console.log(`http://localhost:3001/`));
