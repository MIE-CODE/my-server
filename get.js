const houses = require("./array");
function handleGetRequest(req, res) {
  res.json(houses);
}

function handleGetRequests(req, res) {
  const houseId = Number(req.params.houseId);
  const house = houses.houses[houseId];
  if (house === undefined) {
    res.json({ message: "house not found...." });
    return;
  }
  res.json(house);
}
module.exports = {
  handleGetRequest,
  handleGetRequests,
};
