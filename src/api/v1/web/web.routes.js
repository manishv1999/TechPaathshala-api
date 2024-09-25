const express = require("express");
const routes = express.Router({ mergeParams: true });
const campaignRoutes = require("./campaign/campaign.routes");
const enrollmentRoutes = require("./enrolment/enrolment.routes");
const paymentRoutes = require("./payment/payment.routes");
const captchaRoutes = require("./captcha/captcha.routes");
const otpRoutes = require("./otp/otp.routes");
const authRoutes = require("./auth/auth.routes")

routes.use("/campaign", campaignRoutes);
routes.use("/enrolment", enrollmentRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/captcha", captchaRoutes);
routes.use("/otp", otpRoutes);
routes.use("/auth", authRoutes);

module.exports = routes;
