const db = require('../config/database');
const modelObject = require('../modelObjects/parks');
const modelName = 'rollerocaster';

module.exports = db.define(modelName, modelObject);