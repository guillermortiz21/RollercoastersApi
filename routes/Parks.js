module.exports = function(app){
  const express = require('express');

  const ParksController = require('../controllers/Parks');
  const parksController = new ParksController();

  const router = express.Router();
  const url = "/parks";
  app.use(url, router);

  router.get("/", parksController.getAll.bind(parksController));
}