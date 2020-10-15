var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')


router.get('/', emprendedoresControllers.perfiles);
router.get('/agregarpost', emprendedoresControllers.agregarPost); // LISTO 
router.get('/miperfil', emprendedoresControllers.miperfil); // LISTO
// router.get('/perfilesVarios', emprendedoresControllers.perfiles); // LISTO *(href)
router.get('/agregarProductos', emprendedoresControllers.agregarProductos);
router.get('/editarProducto', emprendedoresControllers.editarProducto);

module.exports= router;