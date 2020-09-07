var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')

//RUTAS 
router.get('/', emprendioControllers.home);
router.get('/login', emprendioControllers.login);
router.get('/registroAdmin', emprendioControllers.registroAdmin);
router.get('/registroComprador', emprendioControllers.registroComprador);
router.get('/registroVendedor', emprendioControllers.registroVendedor);
router.get('/carrito', emprendioControllers.carrito);
router.get('/preguntasFrecuentes', emprendioControllers.preguntasFrecuentes);

module.exports= router;