module.exports = function(app){
  const express = require('express');

  const RollercoastersController = require('../controllers/Rollecoasters');
  const rollercoastersController = new RollercoastersController();

  const router = express.Router();
  const url = "/rollercoasters";
  app.use(url, router);

  router.get("/", rollercoastersController.getAll.bind(rollercoastersController));
}