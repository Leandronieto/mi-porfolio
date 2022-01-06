//Express
const express = require ('express');

//Enrutador Express
const router = express.Router();

//Requerir mainConroller
const mainController = require('../controllers/mainController');

//Ruta a Home
router.get('/', mainController.home);


//ruta a app.js
module.exports = router;