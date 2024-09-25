const mysqlManager = require("shared/manager");
const logger = require("shared/manager/logger");

const saveChangedPassword = async ( userId , changePassword , request_id) => {
  logger.info({
    function_name: "saveChangedPassword",
    message: "Saving Changed Password",
    request_id,
  });

  const conn = await mysqlManager.getConnection();

  const query = `UPDATE USERS 
                  SET password = ? , token = ?
                  WHERE user_id = ?`;

  const params = [changePassword , null , userId];

  const result = await conn.execute( query , params);

  return result;
}

const getUserByToken = async ({ token }, { request_id }) => {
  logger.info({
    function_name: "getUserByToken",
    message: "User Details",
    request_id,
    token
  });

  const conn = await mysqlManager.getConnection();

  const query = `select * from users where token = ? limit 1`;

  const params = [token];

  const result = await conn.execute(query , params);

  return result[0][0];
}

const saveToken = async ({ email }, { request_id }, { token }) => {
  logger.info({
    function_name: "saveToken",
    message: "Saved Token",
    request_id,
    email,
    token
  });

  const conn = await mysqlManager.getConnection();

  const query = `UPDATE USERS 
                  SET TOKEN = ?
                  WHERE EMAIL =?`;

  const params = [token , email];
  const result = await conn.execute(query, params);

  // console.log("result :---------------",result);

  return result;
}

const getUser = async ({ email }, { request_id }) => {
  logger.info({
    function_name: "getUser",
    message: "User Details",
    request_id,
    email,
  });

  const conn = await mysqlManager.getConnection();

  const query = `SELECT * FROM USERS
                  WHERE email = ?`;

  const params = [email];

  const result = await conn.execute(query, params);

  if (!result.length) {
    logger.info({
      function_name: "getUser",
      message: "User not found",
      request_id,
      email,
    });

    return false;
  }

  logger.info({
    function_name: "getUser",
    message: "User Details ",
    request_id,
    result: result[0],
  });

  return result[0];
};

const createUser = async ({ name, email, password, phone }, { request_id }) => {
  logger.info({
    function_name: "create User",
    message: "Create User",
    request_id,
    email,
  });

  const conn = await mysqlManager.getConnection();

  const query = `INSERT INTO USERS (name, email, password, phone) VALUES (?,?,?,?)`;

  const params = [name, email, password, phone];

  const result = await conn.execute(query, params);

  logger.info({
    function_name: "create User",
    message: "Created User Details ",
    request_id,
    result: result[0],
  });

  return result[0];
};

module.exports = {
  getUser,
  createUser,
  saveToken,
  getUserByToken,
  saveChangedPassword
};
