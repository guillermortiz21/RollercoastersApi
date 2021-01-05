const parksModel = require('../../models/parks');
const dbActions = require('../../utils/DbActions');

const getRollercoasters = function(){
  return new Promise(async (resolve, reject) => {
    let parks = null;
    try{
      parks = await dbActions.select(parksModel, {raw:true});
    }catch(err){
      reject(err);
    }
  
    const rollercoasters = [
      {
        name: "Millennium Force",
        parksId: parks.filter((park) => park.name === "Cedar Point")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Steel Vengeance",
        parksId: parks.filter((park) => park.name === "Cedar Point")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Twisted Cyclone",
        parksId: parks.filter((park) => park.name === "Six Flags Over Georgia")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Goliath",
        parksId: parks.filter((park) => park.name === "Six Flags Over Georgia")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Medusa Steel Coaster",
        parksId: parks.filter((park) => park.name === "Six Flags Mexico")[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    resolve(rollercoasters);
  })
}

const rollercoasters = getRollercoasters();

module.exports = rollercoasters;
