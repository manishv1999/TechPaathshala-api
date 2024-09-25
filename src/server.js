const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

const options = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const apiRoutes = require("api/api.routes");
const appConfig = require("config");
const logger = require("shared/manager/logger");
const { requestIdMiddleware } = require("middlewares");
const errorHandler = require("shared/handlers/error.handler");
const { config } = require("dotenv");

const app = express();
app.use(cors(options));
app.use(compression());
app.use(requestIdMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get('/', function (req, res) {
  res.end('This is Techpaathshala Server');
});

app.use(apiRoutes);

app.use((err, req, res, next) => {
  const { request_id } = req;
  const { name: errorName, message, stack } = err;
  logger.error({
    err: {
      name: errorName,
      message,
      stack,
    },
    message,
    function_name: "errorHandler",
    request_id,
  });
  errorHandler(err, req, res, next);
});

app.listen(appConfig.app.port, appConfig.app.host, (err) => {
  if (err) {
    logger.error({
      error: err,
      message: err.message,
    });
  }
  logger.info({
    message: `Server running on http://${appConfig.app.host}:${appConfig.app.port}`,
  });
});