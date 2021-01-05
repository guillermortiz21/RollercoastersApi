const db = require('../config/database');
const modelObject = require('../modelObjects/rollercoasters');
const modelName = 'rollercoaster';

module.exports = db.define(modelName, modelObject);