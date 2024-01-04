/*
  middlewares are used to do pre-checks:
    - Authentication
    - Input Validation
*/

const express = require("express");
const app = express();

app.use(express.json()); //to get -> post body parameter

const PORT = 3001;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

/* Smart way of doing Validation (as middlewares) */
function userMiddleware(req, res, next) {
  const { username, password } = req.headers;

  if (username != "Shubham" || password != "pass") {
    res.status(404).json({
      msg: "user doesn't exist",
    });
  } else {
    next(); // 1) will pass to next middleware function (i.e. (2) kidneyMiddleware)
  }
}

function kidneyMiddleware(req, res, next) {
  const { kidneyId } = req.query;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "wrong inputs",
    });
  } else {
    next(); //2) will pass to next middleware function if exist else(i.e. (3) callback)
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your Heart is healthy ❤️",
  });
});

/* Dumb way of doing Validation (no middlewares) */
// app.get("/health-checkup", (req, res) => {
//   const { kidneyId } = req.query;
//   const { username, password } = req.headers;

//   if (username != "Shubham" || password != "pass") {
//     res.status(404).json({
//       msg: "user doesn't exist",
//     });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({
//       msg: "wrong inputs",
//     });
//     return;
//   }

//   res.json({
//     msg: "Your Heart is healthy ❤️",
//   });
// });
