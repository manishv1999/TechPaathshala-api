const logger = require("shared/manager/logger");

const generateRandomNumber = ({ length }) => {
  const digits = "0123456789";
  let number = "";

  for (let i = 0; i < length; i++) {
    number += digits[Math.floor(Math.random() * 10)];
  }

  return number;
};

module.exports = {
  generateRandomNumber,
};
