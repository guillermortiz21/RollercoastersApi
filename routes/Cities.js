const rollercoasters = require('../modelObjects/rollercoasters');

module.exports = function(app){
  const express = require('express');

  const CitiesController = require('../controllers/Cities');
  const citiesController = new CitiesController();

  const router = express.Router();
  const url = "/cities";
  app.use(url, router);

  router.get("/", citiesController.select.bind(citiesController));
  router.post("/", citiesController.insert.bind(citiesController));
  router.put("/:id", citiesController.update.bind(citiesController));
  router.delete("/:id", citiesController.delete.bind(citiesController));
}