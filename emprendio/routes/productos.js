var express = require('express');
var router = express.Router();
var productosControllers = require('../controllers/productosControllers')



// ACA SOLO PUEDO ENTRAR CON EL PREFIJO "PRODUCTOS"

// localhsot:3000/productos/
router.get('/', productosControllers.productos);
router.get('/detalle', productosControllers.detalle);
router.post('/detalle/:id', productosControllers.detalleId);
router.get('/buscarProductos', productosControllers.buscarProductos);
router.get('/editarProducto', productosControllers.editarProducto);
router.get('/comprarProductos', productosControllers.comprarProductos);
router.get('/favoritos', productosControllers.favoritos);

module.exports= router;