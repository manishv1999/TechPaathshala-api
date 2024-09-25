const express = require("express");
const routes = express.Router({ mergeParams: true });

const authController = require("./auth.controller");

routes.post("/login", authController.login);
routes.post("/signup", authController.signup);
routes.post("/forgot-password", authController.forgotPassword);
routes.post("/change-password", authController.changePassword);


module.exports = routes;
