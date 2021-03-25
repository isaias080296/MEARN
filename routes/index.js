var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});
 
/* Servicios. */
router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});
 
/* Contacto. */
router.get('/contactos', function(req, res, next) {
  res.render('contactos', { title: 'Contacto' });
});

module.exports = router;
