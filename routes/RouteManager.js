const Rollercoasters = require('./Rollercoasters');
const Parks = require('./Parks');
const Cities = require('./Cities');

module.exports = function(app){
  Rollercoasters(app);
  Parks(app);
  Cities(app);
}