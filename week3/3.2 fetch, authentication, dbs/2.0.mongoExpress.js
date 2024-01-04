const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.listen(3000, () => console.log("success"));

main()
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://admin_db1:fI5EdYZWRfppx6Hv@cluster0.2w6nvq2.mongodb.net/userappnew"
  );
}

const userSchema = {
  name: String,
  email: { type: String, required: true },
  password: String,
};

const User = mongoose.model("Users", userSchema);

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(404).send("User already exist");
  }

  await user
    .save()
    .then(() => console.log("data saved"))
    .catch((err) => console.log(err));

  res.send("Welcome...");
});
