var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController')


//RUTAS 
router.get('/', homeController.home);
router.get('/login', homeController.login); 
router.get('/registro', homeController.registro);
router.get('/respuesta', homeController.respuesta);
router.get('/registroAdmin', homeController.registroAdmin); 
router.get('/registroComprador', homeController.registroComprador); 
router.get('/registroVendedor', homeController.registroVendedor); 
router.post('/guardarAdmin', homeController.guardarAdmin);
router.post('/guardarVendedor', homeController.guardarVendedor);
router.get('/preguntasFrecuentes', homeController.preguntasFrecuentes); 
router.get('/quienesSomos', homeController.quienesSomos);  
router.get('/quienesSomos', homeController.quienesSomos); 
router.get('/buscar', homeController.buscar);  
router.get('/aprobacionVendedor', homeController.aprobacionVendedor);
router.get('/feed', homeController.feed);
router.get('/contacto', homeController.contacto);
router.get('/estilos', homeController.estilos);
router.post("/procesologin", homeController.procesologin)
 



module.exports= router;