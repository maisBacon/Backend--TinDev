const express = require("express");
const DevController = require("./controllers/DevController");
const LikeDevController = require("./controllers/LikeController");
const DislikesDevControllers = require("./controllers/DislikesControllers");

const routes = express.Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeDevController.store);
routes.post("/devs/:devId/dislikes", DislikesDevControllers.store);

module.exports = routes;
