const modelObject = require('../modelObjects/parks');
const tableName = "Parks";

module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable(tableName, modelObject)
      .then(() => {
        queryInterface.addConstraint('Parks',{
          fields:['citiesId'],
          type:'foreign key',
          name:'parks_cities_fk',
          references: {
            table: 'cities',
            field: 'id'
          },
          onDelete: 'restrict',
          onUpdate: 'no action'
        })
      })
      .catch((err) =>{
        console.log(err);
      })
  },

  down: async(queryInterface, Sequelize) => {
    try{
      await queryInterface.removeConstraint('Parks', 'parks_cities_fk');
      await queryInterface.removeIndex('Parks', 'parks_cities_fk');
      return queryInterface.dropTable(tableName);
    }catch(err){
      console.log(err);
    }
  }
}