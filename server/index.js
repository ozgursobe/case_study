const express = require("express");
const cors = require("cors");
const data = require("./products.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Started");
});
