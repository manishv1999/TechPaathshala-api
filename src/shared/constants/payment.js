const payment = {
  STATUS: {
    success: "SUCCESS",
    failed: "FAILED",
    pending: "PENDING",
  },
  RZR_STATUS: {
    AUTHORIZED: "authorized",
    CAPTURED: "captured",
    FAILED: "failed",
  },
  PAYMENT_TYPE: {
    FULL: "full",
    EMI: "emi",
  },
};

module.exports = payment;
