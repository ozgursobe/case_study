const productsData = require("../products.json");
const { addPriceToProducts } = require("../utils/productProcesser");

const getProducts = (req, res) => {
  try {
    const productsWithPrice = addPriceToProducts(productsData);
    res.json(productsWithPrice);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while processing data." });
  }
};

module.exports = { getProducts };
