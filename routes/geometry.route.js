var express = require('express');
var router = express.Router();
var geometryController = require('../controllers/geometry.controller');


router.get('/', geometryController.getGeometries);
router.post('/', geometryController.createGeometry);
router.patch('/:id', geometryController.updateGeometry);

module.exports = router;
