var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')
//RUTAS 

// /home/
router.get('/', emprendioControllers.home); // LISTO *(href)
// /home/login
router.get('/login', emprendioControllers.login); // LISTO *(href)
// /home/registroAdmin
router.get('/registro', emprendioControllers.registro)
router.get('/registroAdmin', emprendioControllers.registroAdmin); // LISTO *(href)
router.get('/registroComprador', emprendioControllers.registroComprador); // LISTO *(href)
router.get('/registroVendedor', emprendioControllers.registroVendedor); // LISTO *(href)
router.get('/preguntasFrecuentes', emprendioControllers.preguntasFrecuentes); 
router.get('/quienesSomos', emprendioControllers.quienesSomos); 
router.get('/buscar', emprendioControllers.buscar);  
router.get('/aprobacionVendedor', emprendioControllers.aprobacionVendedor);
router.get('/feed', emprendioControllers.feed);
router.get('/contacto', emprendioControllers.contacto);
router.get('/testing', emprendioControllers.testing);

module.exports= router;