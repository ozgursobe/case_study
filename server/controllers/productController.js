const productsData = require("../products.json");

const getProducts = (req, res) => {
  try {
    res.json(productsData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while processing data." });
  }
};

module.exports = { getProducts };
