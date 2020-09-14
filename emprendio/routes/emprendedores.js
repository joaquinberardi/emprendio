var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')


router.get('/', emprendedoresControllers.perfiles);
router.get('/agregarpost', emprendedoresControllers.agregarPost); // LISTO *(href)
router.get('/perfiles', emprendedoresControllers.perfiles); // LISTO *(href)
router.get('/miperfil', emprendedoresControllers.miperfil); // LISTO *(href)

module.exports= router;