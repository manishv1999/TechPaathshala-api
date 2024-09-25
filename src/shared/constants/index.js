const payment = require("./payment");
const error = require("./error");
const otp = require("./otp");
const program = require("./program")

module.exports = {
  PAYMENT: payment,
  ERROR: error,
  OTP: otp,
  PROGRAM: program,
};
