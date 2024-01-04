const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const app = express();
app.use(express.json()); // for parsing application/json

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExist = false;

  ALL_USERS.find((uname) => {
    if (uname.username === username && uname.password === password) {
      userExist = true;
    }
  });

  return userExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    console.log("Username : ", username);
    // return a list of users other than this username
    const filteredUsers = ALL_USERS.filter((u) => u.username !== username);
    res.json({
      filteredUsers,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => console.log(`listening...`));
