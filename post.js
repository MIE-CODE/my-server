const houses = require("./array");
function handlePostRequest(req, res) {
  const { name, price, location } = req.body;
  if (name === undefined || price === undefined || location === undefined) {
    res.send({ message: "house connot be Empty" });
    return;
  }
  houses.houses.push(req.body);
  console.log(req.body);
  res.send(req.body);
}
module.exports = {
  handlePostRequest,
};
