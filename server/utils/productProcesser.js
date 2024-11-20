const { fetchGoldPrice } = require("./api");
const { convertGoldPriceToPerGram } = require("./helper");

const addPriceToProducts = async (products) => {
  const goldPricePerOunce = await fetchGoldPrice();
  const goldPricePerGram = convertGoldPriceToPerGram(goldPricePerOunce);
  return products.map((product) => ({
    ...product,
    price: `$${(
      (product.popularityScore + 1) *
      product.weight *
      goldPricePerGram
    ).toFixed(2)} USD`,
  }));
};

module.exports = { addPriceToProducts };
