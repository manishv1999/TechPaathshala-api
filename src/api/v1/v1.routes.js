const express = require("express");
const routes = express.Router();
// const { authMiddleware } = require("../../middlewares/auth.middleware");

const studentRoutes = require("./student/student.routes");
const instructorROutes = require("./instructor/instructor.routes");
const webRoutes = require("./web/web.routes");

routes.use("/student", studentRoutes);
routes.use("/instructor", instructorROutes);
routes.use("/web", webRoutes);


module.exports = routes;
