module.exports = function(app){
  const express = require('express');

  const ParksController = require('../controllers/Parks');
  const parksController = new ParksController();

  const router = express.Router();
  const url = "/parks";
  app.use(url, router);

  router.get("/", parksController.select.bind(parksController));
  router.post("/", parksController.insert.bind(parksController));
  router.put("/:id", parksController.update.bind(parksController));
  router.delete("/:id", parksController.delete.bind(parksController));
}