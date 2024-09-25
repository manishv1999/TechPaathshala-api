const logger = require("shared/manager/logger");
const { errorUtils } = require("shared/utils");
const jwt_decode = require("jwt-decode");
const { studentExists } = require("app/student/student/student.service");
const { instructorExists } = require("app/instructor/instructor/instructor.service")
module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization){
      return errorUtils.throwBadRequest("No Auth Token is Present.");
    }
    
    const { studentId, instructorId, timestamp, iat } = await jwt_decode(authorization);

    logger.info({
      message: "check jwt auth decode",
      student_id: studentId,
      instructor_id: instructorId,
      timestamp,
      iat,
      jwt_decode: jwt_decode(authorization),
    });

    if (studentId) {
      const studentExist = await studentExists({ studentId });

      if (!studentExist) {
        return errorUtils.throwNotFound("Student");
      }
      req.studentId = studentId;
    }

    if (instructorId) {
      const instructorExist = await instructorExists({ instructorId });

      if (!instructorExist) {
        return errorUtils.throwNotFound("Instructor");
      }
      req.instructorId = instructorId;
    }

    return next();
  } catch (err) {
    logger.error({
      message: err.message,
      err,
      function_name: "authMiddleware",
      request_id: req.request_id,
    });

    let error = err;
    if (error.name !== "Forbidden" && error.name !== "AccessControlError") {
      error = new Error("Invalid Token");
      error.name = errorUtils.ERROR.UNAUTHORIZED;
    } else {
      error = new Error("Not have resource access");
      error.name = errorUtils.ERROR.FORBIDDEN;
    }
    return next(error);
  }
};
