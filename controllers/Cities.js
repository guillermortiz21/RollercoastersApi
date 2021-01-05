const dbActions = require('../utils/DbActions');

module.exports = class Parks{
  constructor(){
    this.model = require('../models/Cities');
  }
  
  async select(req, res){
    const options = {
      raw:true,
      where: req.query
    };
    let rows = null;
    try{
      rows = await dbActions.select(this.model, options);
      res.status(200).json({
        success: true,
        rows
      });
    }catch(err){
      console.log(`\nError: ${err}\n`);
      res.status(400).json({
        success: false,
        error: "Error getting cities"
      });
    }
  }

  async insert(req, res){
    console.log(req.body)
    let result = null;
    try{
      result = await dbActions.insert(this.model, req.body);
      res.status(201).json({
       success: true,
       inserted_row: result.dataValues 
      });
    }catch(err){
      console.log(`\nError: ${err}\n`);
      res.status(400).json({
        success: false,
        error: "Error creating a city"
      });
    }
  }

  async update(req, res){
    const options = {
      where:{
        id: req.params.id
      }
    };
    let result = null;
    try{
      result = await dbActions.update(this.model, req.body, options);
      res.status(200).json({
       success: true,
       updated_rows: result 
      });
    }catch(err){
      console.log(`\nError: ${err}\n`);
      res.status(400).json({
        success: false,
        error: "Error updating a city"
      });
    }
  }

  async delete(req, res){
    const options = {
      where:{
        id: req.params.id
      }
    };
    let result = null;
    try{
      result = await dbActions.delete(this.model, options);
      res.status(200).json({
       success: true,
       deleted_rows: result 
      });
    }catch(err){
      console.log(`\nError: ${err}\n`);
      res.status(400).json({
        success: false,
        error: "Error deleting a city"
      });
    }
  }
}