module.exports = {
  apps: [
    {
      name: "paathshala-api",
      script: "./src/server.js",
      instances: "1",
      exec_mode: "cluster",
    },
  ],
};
