const db = require('../config/database');
const modelObject = require('../modelObjects/cities');
const modelName = 'rollerocaster';

module.exports = db.define(modelName, modelObject);