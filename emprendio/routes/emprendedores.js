var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')

// /emprendedores
router.get('/', emprendedoresControllers.perfiles);
router.get('/miperfil/:id', emprendedoresControllers.miperfil);
router.get('/emprendedor/:id', emprendedoresControllers.emprendedorPerfil);
router.get('/agregarProducto', emprendedoresControllers.agregarProductos);
router.get('/editarProductos/:id', emprendedoresControllers.editarProductos);
router.get("/editarEmprendedores/:id", emprendedoresControllers.editarEmprendedores);
router.post('/update', emprendedoresControllers.update);
router.post('/edito/:id', emprendedoresControllers.edito);
router.post ("/guardar", emprendedoresControllers.guardar);
router.post ("/borrar", emprendedoresControllers.borrar);
router.post ("/agregarPost", emprendedoresControllers.agregarPost);

module.exports= router;