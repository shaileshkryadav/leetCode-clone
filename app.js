const express = require("express");
const bodyParser = require("body-parser");
const userData = [];

const app = express();
app.use(express.static("Pages"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Pages/Home/Home.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/Pages/Login/Login.html");
});

// app.get("/register", (req, res) => {});

app.post("/login", (req, res) => {
  const data = { email: req.body.email, password: req.body.password };
  userData.push(data);
  res.send(userData);
});

app.post("/register", (req, res) => {});

app.listen(3000, () => console.log("The server is running at port 3000"));
