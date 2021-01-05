require('dotenv').config();

module.exports = {
  up: async (queryInterface, sequelize) =>{
    const parks = await require('./seedersData/parks');
    return queryInterface.bulkInsert('Parks', parks);
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete('Parks', null, {});
  } 
}