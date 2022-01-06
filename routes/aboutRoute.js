//Express
const express = require('express');
const aboutController = require ('../controllers/aboutController');

//Enrutador
const router = express.Router();

//Enrutar aboutController
router.get('/about', aboutController.about);

//Exportar para app.js
module.exports = router;