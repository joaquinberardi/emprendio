var express = require('express');
var router = express.Router();
var productosControllers = require('../controllers/productosControllers')



// ACA SOLO PUEDO ENTRAR CON EL PREFIJO "PRODUCTOS"

// localhsot:3000/productos/
router.get('/', productosControllers.productos);
router.get('/detalle/:id', productosControllers.detalleId);
router.get('/comprarProductos', productosControllers.comprarProductos);
router.get('/favoritos', productosControllers.favoritos);
router.get('/carrito', productosControllers.carrito);
router.post('/comentario', productosControllers.comentario);

module.exports= router;