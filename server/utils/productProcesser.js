const addPriceToProducts = (products) => {
  return products.map((product) => ({
    ...product,
    price: (product.popularityScore + 1) * product.weight * 3,
  }));
};

module.exports = { addPriceToProducts };
