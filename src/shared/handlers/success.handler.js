const { payloadUtils } = require("shared/utils");

module.exports = (data, req, res, next) => res.status(200).send(payloadUtils.getSuccessPayload(data));
