const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin_db1:fI5EdYZWRfppx6Hv@cluster0.2w6nvq2.mongodb.net/mern-todo"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
