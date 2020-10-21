var express = require('express');
var router = express.Router();
var usuarioControllers = require('../controllers/usuarioControllers')

router.get('/', usuarioControllers.miperfil);
router.get('/admin', usuarioControllers.panelAdmin);

module.exports= router;