var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')


//RUTAS 
router.get('/', emprendioControllers.home);
router.get('/productos', emprendioControllers.productos);
router.get('/detalle', emprendioControllers.detalle);
router.post('/detalle/:id', emprendioControllers.detalleId);
router.get('/buscarProductos', emprendioControllers.buscarProductos);
router.get('/buscarPerfiles', emprendioControllers.buscarPerfiles);
router.get('/agregarpost', emprendioControllers.agregarPost);
router.get('/perfiles', emprendioControllers.perfiles);
router.get('/miperfil', emprendioControllers.miperfil);
router.get('/login', emprendioControllers.login);
router.get('/registroAdmin', emprendioControllers.registroAdmin);
router.get('/registroComprador', emprendioControllers.registroComprador);
router.get('/registroVendedor', emprendioControllers.registroVendedor);
router.get('/editarProducto', emprendioControllers.editarProducto);
router.get('/carrito', emprendioControllers.carrito);
router.get('/comprarProductos', emprendioControllers.comprarProductos);
router.get('/preguntasFrecuentes', emprendioControllers.preguntasFrecuentes);
router.get('/favoritos', emprendioControllers.favoritos);

module.exports= router;