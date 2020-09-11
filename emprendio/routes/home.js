var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')
//RUTAS 
router.get('/', emprendioControllers.home); // LISTO *(href)
router.get('/login', emprendioControllers.login); // LISTO *(href)
router.get('/registroAdmin', emprendioControllers.registroAdmin); // LISTO *(href)
router.get('/registroComprador', emprendioControllers.registroComprador); // LISTO *(href)
router.get('/registroVendedor', emprendioControllers.registroVendedor); // LISTO *(href)
router.get('/carrito', emprendioControllers.carrito); // LISTO *(href)
router.get('/preguntasFrecuentes', emprendioControllers.preguntasFrecuentes);  // A donde conecta?
router.get('/buscar', emprendioControllers.buscar);  // A donde conecta?

module.exports= router;