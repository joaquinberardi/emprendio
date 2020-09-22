var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')


router.get('/', emprendedoresControllers.perfilesVarios);
router.get('/agregarpost', emprendedoresControllers.agregarPost); // LISTO 
router.get('/miperfil', emprendedoresControllers.miperfil); // LISTO
router.get('/perfilesVarios', emprendedoresControllers.perfiles); // LISTO *(href)

module.exports= router;