const productsData = require("../products.json");
const { addPriceToProducts } = require("../utils/productProcesser");

const getProducts = async (req, res) => {
  try {
    const productsWithPrice = await addPriceToProducts(productsData);
    res.json(productsWithPrice);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = { getProducts };
