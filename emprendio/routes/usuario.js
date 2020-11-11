var express = require('express');
var router = express.Router();
var usuarioControllers = require('../controllers/usuarioControllers')

router.get('/', usuarioControllers.miperfil);
router.get('/admin', usuarioControllers.panelAdmin);
router.get('/admin/listaemprendedores', usuarioControllers.listaemprendedores)
router.get('/admin/listaproductos', usuarioControllers.listaproductos)


router.post('/admin/eliminandousuario', usuarioControllers.eliminandousuario)
router.post('/admin/aceptandousuario', usuarioControllers.aprobarvendedor)


module.exports= router;