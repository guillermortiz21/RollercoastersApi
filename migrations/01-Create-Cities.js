const modelObject = require('../modelObjects/cities');
const tableName = "Cities";

module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable(tableName, modelObject);
  },

  down:(queryInterface, Sequelize) => {
    try{
      return queryInterface.dropTable(tableName);
    }catch(err){
      console.log(err);
    }
  }
}