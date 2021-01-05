const modelObject = require('../modelObjects/rollercoasters');
const tableName = "Rollercoasters";

module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable(tableName, modelObject)
      .then(() =>{
        queryInterface.addConstraint('Rollercoasters',{
          fields:['parksId'],
          type:'foreign key',
          name:'rollercoasters_park_fk',
          references:{
            table: 'parks',
            field: 'id'
          },
          onDelete: 'restrict',
          onUpdate: 'no action'
        })
      })

      .catch((err) => {
        console.log(err);
      })
  },

  down: async (queryInterface, Sequelize) => {
    try{
      await queryInterface.removeConstraint('Rollercoasters', 'rollercoasters_park_fk');
      await queryInterface.removeIndex('Rollercoasters', 'rollercoasters_park_fk');
      return queryInterface.dropTable(tableName);
    }catch(err){
      console.log(err);
    }
  }
}