const express = require("express");
const route = express.Router();
const services = require("../services/RouteServices.js");

route.get("/", services.showAll);
route.get("/:id", services.showOne);
route.get("/info", services.info);
route.post("/", services.add);
route.put("/:id");
route.delete("/:id", services.deleteOne);

module.exports = route;
