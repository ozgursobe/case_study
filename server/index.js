const express = require("express");
const cors = require("cors");
const { getProducts } = require("./controllers/productController");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", getProducts);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Started");
});
