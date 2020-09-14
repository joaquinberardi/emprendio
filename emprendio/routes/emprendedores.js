var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')


router.get('/', emprendedoresControllers.perfiles);
router.get('/agregarpost', emprendedoresControllers.agregarPost); // LISTO 
router.get('/perfiles', emprendedoresControllers.perfiles); // LISTO 
router.get('/miperfil', emprendedoresControllers.miperfil); // LISTO

module.exports= router;