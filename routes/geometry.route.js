var express = require('express');
var router = express.Router();
var geometryController = require('../controllers/geometry.controller');


router.get('/', geometryController.getGeometries);

module.exports = router;
