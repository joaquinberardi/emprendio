var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')


//RUTAS 
router.get('/', emprendioControllers.home);
router.get('/login', emprendioControllers.login); 
router.get('/registro', emprendioControllers.registro)
router.get('/registroAdmin', emprendioControllers.registroAdmin); 
router.get('/preguntasFrecuentes', emprendioControllers.preguntasFrecuentes); 
router.get('/quienesSomos', emprendioControllers.quienesSomos); 
router.get('/buscar', emprendioControllers.buscar);  
router.get('/aprobacionVendedor', emprendioControllers.aprobacionVendedor);
router.get('/feed', emprendioControllers.feed);
router.get('/contacto', emprendioControllers.contacto);
router.get('/estilos', emprendioControllers.estilos);

module.exports= router;