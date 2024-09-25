const mysql = require("mysql2/promise");

var globalConnection = null;

module.exports = ({
  host,
  port,
  user,
  password,
  database,
  waitForConnections,
  connectionLimit,
  queueLimit,
  debug,
}) => {
  const getConnection = async () => {
    if (globalConnection) {
      let isOpen = !globalConnection?.connection?._closing;
      if (isOpen) {
        console.log("DB: connection exists ");
        return globalConnection;
      }
      console.log("DB: connection expired ");
      console.log("DB: going for new connection.");
    }
    globalConnection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
      waitForConnections,
      connectionLimit,
      queueLimit,
      debug,
    });
    return globalConnection
  };

  const getTransactionalConnection = async () => {
    const pool = await getConnection();
    return pool;
  };

  return {
    getConnection,
    getTransactionalConnection,
  };
};
