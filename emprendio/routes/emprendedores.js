var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')

router.get('/buscarPerfiles', emprendedoresControllers.buscarPerfiles);
router.get('/agregarpost', emprendedoresControllers.agregarPost); // Sin ruta
router.get('/perfiles', emprendedoresControllers.perfiles);
router.get('/miperfil', emprendedoresControllers.miperfil);

module.exports= router;