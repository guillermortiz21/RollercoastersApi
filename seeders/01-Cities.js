module.exports = {
  up: (queryInterface, sequelize) =>{
    const cities = require('./seedersData/cities');
    return queryInterface.bulkInsert('Cities', cities);
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  } 
}