const ERROR = {
  SYNTAX_ERROR: "SyntaxError",
  BAD_REQUEST: "BadRequest",
  VALIDATION_ERROR: "ValidationError",
  UNAUTHORIZED: "Unauthorized",
  ACCESS_CONTROL_ERROR: "AccessControlError",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "NotFound",
  DUPLICATE: "Duplicate",
  PRECONDITION_FAILED: "PreconditionFailed",
  UNPROCESSABLE_ENTITY: "UnprocessableEntity",
  TOO_MANY_REQUESTS: "TooManyRequests",
  INTERNAL_SERVER_ERROR: "InternalServerError",
  INVALID_TIME: "InvalidTime"
};

const throwBadRequest = (message = "Bad Request") => {
  const err = new Error(message);
  err.name = ERROR.BAD_REQUEST;
  throw err;
};

const throwUnauthorized = (message = "Unauthorized") => {
  const err = new Error(message);
  err.name = ERROR.UNAUTHORIZED;
  throw err;
};

const throwForbidden = (message = "Forbidden") => {
  const err = new Error(message);
  err.name = ERROR.FORBIDDEN;
  throw err;
};

const throwNotFound = (itemName = "Item", fullMessage = null) => {
  const message = fullMessage || `${itemName} Not Found`;
  const err = new Error(message);
  err.name = ERROR.NOT_FOUND;
  throw err;
};

const throwDuplicate = (itemName = "Item") => {
  const err = new Error(`${itemName} Already Exists`);
  err.name = ERROR.DUPLICATE;
  throw err;
};

const throwPreconditionFailed = (message = "Precondition Failed") => {
  const err = new Error(message);
  err.name = ERROR.PRECONDITION_FAILED;
  throw err;
};

const throwTooManyRequests = (message = "Too Many Requests") => {
  const err = new Error(message);
  err.name = ERROR.TOO_MANY_REQUESTS;
  throw err;
};

const throwInternalServerError = (message = "Internal Server Error") => {
  const err = new Error(message);
  err.name = ERROR.INTERNAL_SERVER_ERROR;
  throw err;
};

const throwInvalidTime = (message = "End Time should be greater than Start Time.") => {
  const err = new Error(message);
  err.name = ERROR.INVALID_TIME;
  throw err;
};

module.exports = {
  ERROR,
  throwBadRequest,
  throwUnauthorized,
  throwForbidden,
  throwNotFound,
  throwDuplicate,
  throwPreconditionFailed,
  throwTooManyRequests,
  throwInternalServerError,
  throwInvalidTime
};
