const db = require('../config/database');
const modelObject = require('../modelObjects/cities');
const modelName = 'city';

module.exports = db.define(modelName, modelObject);