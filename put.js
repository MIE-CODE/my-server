const houses = require("./array");
function handlePutRequest(req, res) {
  const houseId = Number(req.params.houseId);
  const house = houses.houses[houseId];

  house.name = req.body.name;
  house.price = req.body.price;
  house.location = req.body.location;

  houses[houseId] = house;
  res.json(house);
}
module.exports = {
  handlePutRequest,
};
