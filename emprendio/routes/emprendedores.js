var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')

// /emprendedores
router.get('/', emprendedoresControllers.perfiles);
router.get('/miperfil', emprendedoresControllers.miperfil);
router.get('/agregarProductos', emprendedoresControllers.agregarProductos);
router.get('/editarProducto/:id', emprendedoresControllers.editarProducto);
router.post('/update', emprendedoresControllers.update);
router.post ("/guardar", emprendedoresControllers.guardar);
router.post ("/borrar", emprendedoresControllers.borrar);
router.post ("/agregarPost", emprendedoresControllers.agregarPost);

module.exports= router;