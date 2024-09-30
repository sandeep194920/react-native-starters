const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://mrsandeepamarnath:Mongodb%40123@cluster0.httmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const bcrypt = require("bcryptjs");

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("App Started");
});

// Middleware to parse JSON request bodies
app.use(express.json());

require("./UserDetails");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({ data: "User already exists" });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, mobile, password: encryptedPassword });
    res.send({ status: "ok", data: "User created" });
  } catch (error) {
    res.send({ status: "error", data: "Error occurred" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}....`);
});
