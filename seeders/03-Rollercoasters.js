require('dotenv').config();

module.exports = {
  up: async (queryInterface, sequelize) =>{
    const rollercoasters = await require('./seedersData/rollercoasters');
    return queryInterface.bulkInsert('Rollercoasters', rollercoasters);
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete('Rollercoasters', null, {});
  } 
}