const db = require('../config/database');
const modelObject = require('../modelObjects/rollercoasters');
const modelName = 'rollerocaster';

module.exports = db.define(modelName, modelObject);