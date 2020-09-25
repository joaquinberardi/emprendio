var express = require('express');
var router = express.Router();
var usuarioControllers = require('../controllers/usuarioControllers')

router.get('/', usuarioControllers.miperfil);
router.get('/favoritos', usuarioControllers.favoritos);
router.get('/carrito', usuarioControllers.carrito);
module.exports= router;