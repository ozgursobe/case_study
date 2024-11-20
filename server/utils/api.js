const fetchGoldPrice = () => {
  const goldPrice = fetch("https://api.gold-api.com/price/XAU")
    .then((res) => res.json())
    .then((data) => data.price);
  return goldPrice;
};

module.exports = { fetchGoldPrice };
