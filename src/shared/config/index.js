const dotenv = require("dotenv");

dotenv.config();

const environment = process.env.ENVIRONMENT;
const ENVIRONMENT = process.env.ENVIRONMENT.toUpperCase();

module.exports = {
  app: {
    environment,
    name: process.env.APP_NAME,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    access_token_secret: process.env.APP_ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.APP_REFRESH_TOKEN_SECRET,
  },
  mysql: {
    environment,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    debug: false,
  },
  sendgrid: {
    sendgrid_api_key: process.env.SENDGRID_API_KEY,
    sendgrid_sender_email: process.env.SENDGRID_SENDER_EMAIL,
    sendgrid_leads_email: process.env.SENDGRID_LEADS_EMAIL,
    sendgrid_sender_name: process.env.SENDGRID_SENDER_NAME,
  },
  zoho: {
    zoho_access_key: process.env.ZOHO_ACCESS_KEY,
    zoho_client_id: process.env.ZOHO_CLIENT_ID,
    zoho_client_secret: process.env.ZOHO_CLIENT_SECRET,
    zoho_client_refresh: process.env.ZOHO_CLIENT_REFRESH,
  },
  razorpay: {
    razorpay_key: process.env.RAZORPAY_KEY,
    razorpay_secret_key: process.env.RAZORPAY_SECRET_KEY,
    razorpay_webhook_secret: process.env.RAZORPAY_WEBHOOK_SECRET,
  },
  msg91: {
    msg91_auth_key: process.env.MSG_91_AUTH_KEY,
    msg91_sender_id: process.env.MSG_91_SENDER_ID,
    msg91_flow_id: process.env.MSG_91_FLOW_ID,
    msg91_template_id: process.env.MSG_91_TEMPLATE_ID
  },
  test: {
    instructor_token: process.env.TEST_INSTRUCTOR_TOKEN,
  },
  nimbbl: {
    access_key : process.env.NIMBBL_ACCESS_KEY,
    secret_key : process.env.NIMBBL_SECRET_KEY,
    generate_token_url : process.env.NIMBBL_GENERATE_TOKEN_API,
    create_order_url : process.env.NIMBBL_CREATE_ORDER_API
  },
  telecrm: {
    telecrm_api_secret : process.env.TELECRM_API_SECRET
  },
  captcha: {
    captcha_api_key : process.env.RECAPTCHA_API_KEY,
    captcha_site_key : process.env.RECAPTCHA_SITE_KEY
  }
};
