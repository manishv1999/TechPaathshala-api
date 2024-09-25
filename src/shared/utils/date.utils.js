function generateFutureTimestamp(minutes) {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now.toISOString().slice(0, 19).replace("T", " ");
}

module.exports = {
  generateFutureTimestamp,
};
