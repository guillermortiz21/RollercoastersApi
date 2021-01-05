const dbActions = require('../utils/DbActions');

module.exports = class Rollercoasters{
  constructor(){
    this.model = require('../models/Rollercoasters');
  }

  async getAll(req, res){
    let rows = null;
    try{
      rows = await dbActions.select(this.model, {raw:true});
      res.status(200).json({
        success: true,
        rows
      });
    }catch(err){
      console.log(`\nError: ${err}\n`);
      res.status(400).json({
        success: false,
        error: "Error getting all rollercoasters"
      });
    }
  }
}