const houses = require("./array");
function handleDeleteRequest(req, res) {
  const houseId = Number(req.params.houseId);
  const house = houses.houses[houseId];

  if (house === undefined) {
    res.status(404).json({ message: "house not found" });
  }

  houses.houses.splice(houseId, 1);

  res.status(200).json(house);
}

module.exports = {
  handleDeleteRequest,
};
