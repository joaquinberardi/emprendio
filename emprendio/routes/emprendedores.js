var express = require('express');
var router = express.Router();
var emprendedoresControllers = require('../controllers/emprendedoresControllers')

// /emprendedores
router.get('/', emprendedoresControllers.perfiles);
router.get('/miperfil', emprendedoresControllers.miperfil);
router.get('/agregarProductos', emprendedoresControllers.agregarProductos);
router.get('/editarProducto', emprendedoresControllers.editarProducto);
<<<<<<< Updated upstream
router.post("/agregarVendedor", emprendedoresControllers.agregarEmprendedor);
=======
router.post ("/guardar", emprendedoresControllers.guardar)

>>>>>>> Stashed changes

module.exports= router;