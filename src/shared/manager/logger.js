const logger = {};

logger.info = (details) => {
  return console.log({
    ...details,
    logged_at: new Date()
  });
};

logger.error = (details) => {
  return console.error({
    ...details,
    logged_at: new Date()
  });
};

module.exports = logger;