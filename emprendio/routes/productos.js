var express = require('express');
var router = express.Router();
var productosControllers = require('../controllers/productosControllers')

router.get('/productos', productosControllers.productos);
router.get('/detalle', productosControllers.detalle);
router.post('/detalle/:id', productosControllers.detalleId);
router.get('/buscarProductos', productosControllers.buscarProductos);
router.get('/editarProducto', productosControllers.editarProducto);
router.get('/comprarProductos', productosControllers.comprarProductos);
router.get('/favoritos', productosControllers.favoritos);

module.exports= router;