class DbActions{
  async select(model, options={}){
   const result = await model.findAll(options);
   return result;
  }

  async insert(model, data){
    const result = await model.create(data);
    return result;
  }

  async update(model, data, options){
    const result = await model.update(data, options);
    return result;
  }

  async delete(model, options){
    const result = await model.destroy(options);
    return result;
  }
}

const dbActions = new DbActions();

module.exports = dbActions;