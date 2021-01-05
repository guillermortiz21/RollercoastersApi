const citiesModel = require('../../models/Cities');
const dbActions = require('../../utils/DbActions');

const getParks = function(){
  return new Promise(async (resolve, reject) => {
    let cities = null;
    try{
      cities = await dbActions.select(citiesModel, {raw:true});
    }catch(err){
      reject(err);
    }
  
    const parks = [
      {
        name: "Cedar Point",
        citiesId: cities.filter((city) => city.name === "Sandusky")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Six Flags Over Georgia",
        citiesId: cities.filter((city) => city.name === "Atlanta")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Six Flags Mexico",
        citiesId: cities.filter((city) => city.name === "Mexico City")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    resolve(parks);
  })
}

const parks = getParks();

module.exports = parks;
