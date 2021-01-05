class DbActions{
  async select(model, options={}){
   const result = await model.findAll(options);
   return result;
  }
}

const dbActions = new DbActions();

module.exports = dbActions;