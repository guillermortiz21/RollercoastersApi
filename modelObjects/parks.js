const Sequelize = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name:{
    type: Sequelize.TEXT
  },
  citiesId:{
    type: Sequelize.INTEGER
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