var express = require('express');
var router = express.Router();
var geometryController = require('../controllers/geometry.controller');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'index' });
});

router.get('/services', function (req, res, next) {
    res.render('services', { title: 'services' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'contact' });
});

router.get('/map', geometryController.renderDDL);

router.get('/login', function (req, res, next) {
    res.render('login', { title: 'login' });
});

module.exports = router;
