const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://test:test@mysql:3308/test"
);

module.exports = sequelize;
