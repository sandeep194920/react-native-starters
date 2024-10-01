const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://mrsandeepamarnath:Mongodb%40123@cluster0.httmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyNzcyMDMzNCwiaWF0IjoxNzI3NzIwMzM0fQ.TNmzjCHKCbfAz9OwEqLe52z7FXBN2e8Qz7ZUiGTWPWc";
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

app.post("/login-user", async (req, res) => {
  console.log("Reached login ep");
  const { email, password } = req.body;
  const oldUser = await User.findOne({ email });
  if (!oldUser) {
    return res.send({ data: "User doesn't exist" });
  }

  const isPasswordMatch = await bcrypt.compare(password, oldUser.password);
  if (isPasswordMatch) {
    // creates a unique token, everytime when user logs-in, with user's email hidden inside token
    const token = await jwt.sign({ email: oldUser.email }, JWT_SECRET);
    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ data: "error" });
    }
  }
});

app.post("/user-data", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;
    User.findOne({ email: userEmail }).then((data) => {
      return res.send({ data: data, status: "ok" });
    });
  } catch (error) {
    return res.send({ data: "error" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}....`);
});
