const authService = require("./auth.service");
const errorUtils = require("shared/utils/error.utils.js");
const errorHandlers = require("shared/handlers/error.handler");
const successHandler = require("shared/handlers/success.handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const logger = require("shared/manager/logger");
const { json } = require("body-parser");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const { use } = require("../../../api/v1/web/auth/auth.routes");

const changePassword = async ({ password, token }, { request_id }) => {
  try {
    logger.info({
      message: "ChangePassword Business",
      function_name: "changePassword",
      token,
      password,
      request_id,
    });

    const user = await authService.getUserByToken({ token }, { request_id });

    if (!user || !user.user_id) {
      throw errorUtils.throwBadRequest("Invalid User");
    }

    const userId = user.user_id;

    const hashedPassword = await bcrypt.hash(password, 10);

    await authService.saveChangedPassword( userId, hashedPassword , request_id);

    return true;

  } catch (error) {
    throw error;
  }
};

const sendResetPasswordMail = async (name, email, token) => {

  try {
    logger.info({
      message: "Sending Reset Password Mail Business",
      function_name: "sendResetPasswordMail",
      token,
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "For Reset Password",
      html:
        "<p> Hii " +
        name +
        ', Please click on the link <a href= '+process.env.AUTH_UI_BASE_URL+process.env.AUTH_UI_CHANGE_PASS_URL+'?token='+
        token +
        '>to reset your password</a></p>',
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw errorUtils.throwBadRequest(error);
      } else {
        console.log("Mail has been sent :", info.response);
      }
    });
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async ({ email }, { request_id }) => {
  try {
    logger.info({
      message: "ForgotPassword Business",
      function_name: "forgotPassword",
      email,
      request_id,
    });

    const user = await authService.getUser({ email }, { request_id });
    if (!user || user.length === 0) {
      throw errorUtils.throwBadRequest("Invalid Email");
    }

    if (user[0].is_active != 1) {
      throw errorUtils.throwBadRequest(
        "No active user found with the provided email"
      );
    }

    const randomString = randomstring.generate();
    console.log(randomString);

    const savedToken = await authService.saveToken(
      { email: email },
      { request_id },
      { token: randomString }
    );

    sendResetPasswordMail(user[0].name, user[0].email, randomString);

  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password }, { request_id }) => {
  try {
    logger.info({
      message: "Login Business",
      function_name: "login",
      email,
      request_id,
    });

    const user = await authService.getUser({ email }, { request_id });

    if (!user || user.length === 0) {
      throw errorUtils.throwBadRequest("Invalid Email & Password");
    }
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      const token = jwt.sign(
        { id: user[0].id, email: user[0].email },
        process.env.JWT_SECRET_KEY
      );
      const userId = user[0].user_id;
      return {
        message: "Login Successfull",
        token,
        userId,
        user: user[0],
      };
    } else {
      throw errorUtils.throwBadRequest("Invalid Email or Password");
    }
  } catch (error) {
    throw error;
  }
};

const signup = async ({ name, email, password, phone }, { request_id }) => {
  try {
    logger.info({
      message: "Signup Business",
      function_name: "Signup",
      name,
      email,
      request_id,
    });

    const existinguser = await authService.getUser({ email }, { request_id });

    if (existinguser && existinguser.length > 0) {
      throw errorUtils.throwBadRequest("Email Already Registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      phone: phone,
    };

    const createUser = await authService.createUser(newUser, { request_id });
    if (!createUser) {
      throw errorUtils.throwBadRequest("Failed to Register User");
    }

    const token = jwt.sign(
      { id: createUser.id, email: createUser.email },
      process.env.JWT_SECRET_KEY
    );

    return {
      message: "Registeration Successfull",
      token,
      user: createUser,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  signup,
  changePassword,
  forgotPassword
};
