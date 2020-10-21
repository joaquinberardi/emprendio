let db = require ("../database/models/index");
let sequelize = db.sequelize;
let op = db.Sequelize.Op;
let bcrypt = require ("bcryptjs")

const { favoritos } = require("./productosControllers");

// CONTROLADORES
let emprendedoresControllers= { 
    perfiles: function(req,res){      // ESTE ES EL MAIN */*
        db.Usuario.findAll()          // LISTO 
        .then(function(usuarios){
        res.render("perfilesVarios", {usuarios: usuarios})
        })
    },
    agregarPost: function(req,res){
        let agregarPost = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            foto: req.body.foto,
            descripcion: req.body.descripcion,
            opciones_envio: req.body.envio,
            opciones_pago: req.body.pago,
            ubicacion: req.body.ubicacion,
            colores: req.body.colores,
            personalizacion: req.body.personalizacion,
            categoria_id: 1,
            usuario_id: 2
            
            // VAS A LA CARPETA DATABASE, DESPUES A LA CARPETA MODELS, Y EN EL ARCHIVO PRODUCTO.JS, PONES TODOS LOS ATRIBUTOS PRINCIPALES (SIN CONTAR ID),
            // OSEA NOMBRE, PRECIO, CATEGORIA_ID, FOTO, ETC. IMPORTANTE --> PONELOS EXACTAMENTE IGUAL QUE COMO ESTÁN ESCRITOS, SIN MAYÚSUCLA, SIN TILES Y CON LOS "_"
            // DESPUÉS PONES DOS PUNTOS Y EN TODOS PONES REQ.BODY. Y DESPUÉS DEL PUNTO TENES QUE FIJARTE LO QUE DICE EN EL FORMULARIO EN EL ARCHIVO AGREGAR POST
            // EN CADA INPUT, TE FIJAS EN LOS ATRIBUTOS "NAME", Y PONES EL NOMBRE QUE TENGA EN CADA UNO.
        }

        db.Producto.create(agregarPost)
        .then(function(){
            res.redirect("/emprendedores/miPerfil");
        })
    },
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO
    },
    agregarProductos: function(req,res){
        return res.render ("agregarProductos") // LISTO
    },
    editarProducto: function(req,res){
        return res.render ("editarProductos") //LISTO
    },
    guardar: function(req,res){
        let comprador = {
            Nombre: req.body.nombre,
            Apellido: req.body.apellido,
            Mail: req.body.mail,
            NombreUsuario: req.body.NombreUsuario,
            Contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            TipoUsuario_id: 1,
        }
    
        db.Usuario.create(comprador)
        .then(function(){
            res.redirect("/home/login");
        })
}
}

module.exports= emprendedoresControllers;