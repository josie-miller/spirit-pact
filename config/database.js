require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL is not set");
}

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

module.exports = sequelize;
