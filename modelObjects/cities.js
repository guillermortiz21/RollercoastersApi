const Sequelize = require('sequelize');
const enums = require('../enums/enums');

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name:{
    type: Sequelize.TEXT
  },
  country:{
    type: Sequelize.ENUM,
    values: enums.countries
  },
  createdAt:{
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt:{
    allowNull: false,
    type: Sequelize.DATE
  }
}