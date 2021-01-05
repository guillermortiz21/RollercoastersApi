module.exports = function(app){
  const express = require('express');

  const RollercoastersController = require('../controllers/Rollecoasters');
  const rollercoastersController = new RollercoastersController();

  const router = express.Router();
  const url = "/rollercoasters";
  app.use(url, router);

  router.get("/", rollercoastersController.select.bind(rollercoastersController));
  router.post("/", rollercoastersController.insert.bind(rollercoastersController));
  router.put("/:id", rollercoastersController.update.bind(rollercoastersController));
  router.delete("/:id", rollercoastersController.delete.bind(rollercoastersController));
}