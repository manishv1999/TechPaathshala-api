const Joi = require("joi");
const logger = require("shared/manager/logger");

const name = Joi.required().label("name");
const email = Joi.required().label("email");
const password = Joi.required().label("password");
const token = Joi.required().label("token");
const phone = Joi.required().label("phone");

const loginValidation = Joi.object({
  email,
  password,
}).unknown(true);

const signupValidation = Joi.object({
  name,
  email,
  password,
  phone,
}).unknown(true);

const forgotPasswordValidation = Joi.object({
  email
}).unknown(true);

const changePasswordValidation = Joi.object({
  password,
  token
}).unknown(true);

module.exports = {
  loginValidation,
  signupValidation,
  forgotPasswordValidation,
  changePasswordValidation
};
