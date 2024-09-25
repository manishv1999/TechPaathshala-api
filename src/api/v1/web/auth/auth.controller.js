const successHandler = require("shared/handlers/success.handler");
const authValidation = require("./auth.validations");
const authBusiness = require("app/web/auth/auth.business");
const logger = require("shared/manager/logger");

/**
 * @api {post} /change-password
 * @apiName Change Password API
 * @apiGroup Auth
 * @apiRequest { token , password }
 * @apiDescription this will validate a token and save changed password
 * @apiSuccess message success message
 */
const changePassword = async(req , res, next) => {
  try{
    const { request_id } = req;

    logger.info({
      message: "changePassword Api Called ",
      function_name: "change_password",
      request_id,
    });

    const token = req.headers.token;
    const password = req.body.password;
    let changePasswordValidation = await authValidation.changePasswordValidation.validateAsync({
      ...req.body,
      ...req.headers
    })

    await authBusiness.changePassword({ password, token}, { request_id : request_id });

    return successHandler(
      { data: { message: "Password Changed Successfully" } },
      req,
      res,
      next
    );
  } catch (e) {
    const { request_id } = req;
    logger.error({
      message: "ChangePassword API Error",
      function_name: "change_password",
      request_id,
      error: e.message,
    });
    return next(e);
  }
};

/**
 * @api {post} /forgot-password
 * @apiName Forgot Password API
 * @apiGroup Auth
 * @apiRequest { email }
 * @apiDescription this will validate a email and sends a mail link with token to reset password
 * @apiSuccess message success message
 */

const forgotPassword = async(req, res, next) => {
  try{
    const { request_id } = req;

    logger.info({
      message: "forgotPassword Api Called ",
      function_name: "forgot_password",
      request_id,
    });

    console.log("request_id", request_id);

    const { email } = req.body;
    // console.log(email)

    let validateEmail =
      await authValidation.forgotPasswordValidation.validateAsync({
        ...req.body,
      });

    const userForgotPassword = await authBusiness.forgotPassword( { email : email }, { request_id } );

    return successHandler(
      { data: { message: "Forgot Password Mail Sent Successfully" } },
      req,
      res,
      next
    );
  } catch (e) {
    const { request_id } = req;
    logger.error({
      message: "forgotPassword error",
      function_name: "forgotPassword",
      request_id,
      error: e.message,
    });
    return next(e);
  }
};

/**
 * @api {post} /login
 * @apiName Login API
 * @apiGroup Auth
 * @apiRequest { email, password }
 * @apiDescription this will generate a token and validate user
 * @apiSuccess message success message
 */

const login = async (req, res, next) => {
  try {
    const { request_id } = req;

    logger.info({
      message: "Login Api Called ",
      function_name: "login",
      request_id,
    });

    const { email, password } = req.body;

    logger.info({
      message: "Login Api Called ",
      function_name: "login",
      request_id,
      email,
    });

    await authValidation.loginValidation.validateAsync({
      ...req.body,
    });

    const userLogin = await authBusiness.login(
      { email: email, password: password },
      { request_id }
    );

    return successHandler(
      {
        data: {
          message: "Login Successfully",
          token: userLogin.token,
          userId: userLogin.userId,
        },
      },
      req,
      res,
      next
    );
  } catch (e) {
    const { request_id } = req;
    logger.error({
      message: "Login API Error",
      function_name: "login",
      request_id,
      error: e.message,
    });
    return next(e);
  }
};

/**
 * @api {post} /signup
 * @apiName Signup API
 * @apiGroup Auth
 * @apiRequest { name, email, password }
 * @apiDescription this will generate a add user to database
 * @apiSuccess message success message
 */

const signup = async (req, res, next) => {
  try {
    const { request_id } = req;

    logger.info({
      message: "Signup Api Called ",
      function_name: "signup",
      request_id,
    });

    const { name, email, password, phone } = req.body;

    logger.info({
      message: "Signup Api Called ",
      function_name: "signup",
      request_id,
      email,
    });

    await authValidation.signupValidation.validateAsync({
      ...req.body,
    });

    const userSignup = await authBusiness.signup(
      { name: name, email: email, password: password, phone: phone },
      { request_id }
    );

    return successHandler(
      { data: { messgae: "Signup Successfully", token: userSignup.token } },
      req,
      res,
      next
    );
  } catch (e) {
    const { request_id } = req;
    logger.error({
      message: "Signup API Error",
      function_name: "signup",
      request_id,
      error: e.message,
    });
    return next(e);
  }
};

module.exports = {
  login,
  signup,
  forgotPassword,
  changePassword
};
