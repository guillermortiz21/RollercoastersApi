const db = require('../config/database');
const modelObject = require('../modelObjects/parks');
const modelName = 'park';

module.exports = db.define(modelName, modelObject);