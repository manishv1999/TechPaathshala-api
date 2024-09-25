const express = require("express");
const routes = express.Router();
const logger = require("shared/manager/logger");
const webhookRoutes = require("./webhooks/webhooks.routes");
const v1Routes = require("./v1/v1.routes");
const v2Routes = require("./v2/v2.routes");


routes.use("/v1/webhook", webhookRoutes);
routes.use("/v1", v1Routes);
routes.use("/v2", v2Routes);

routes.use("*", (req, res, next) => {
  try {
    logger.info({
      message: "Route not found",
      url: req.originalUrl,
    });
    return res.status(404).send('Route Not Found')
  } catch (e) {
    return next(e);
  }
});

module.exports = routes;
