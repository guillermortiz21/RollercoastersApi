const rollercoasters = require('../modelObjects/rollercoasters');

module.exports = function(app){
  const express = require('express');

  const CitiesController = require('../controllers/Cities');
  const citiesController = new CitiesController();

  const router = express.Router();
  const url = "/cities";
  app.use(url, router);

  router.get("/", citiesController.getAll.bind(citiesController));
}