const express = require("express");
const app = express();
const getHandler = require("./get");
const postHandler = require("./post");
const putHandler = require("./put");
const deleteHandler = require("./delete");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/houses", getHandler.handleGetRequest);
app.get("/houses/:houseId", getHandler.handleGetRequests);
app.put("/houses/:houseId", putHandler.handlePutRequest);
app.post("/houses", postHandler.handlePostRequest);
app.delete("/houses/:houseId", deleteHandler.handleDeleteRequest);
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
