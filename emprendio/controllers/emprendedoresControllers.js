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
    borrar: function(req,res){
         let idProductoBorrar = req.body.idProducto123;
         db.Producto.destroy(
         { where: {
             id: idProductoBorrar
         }
        })
        .then(function() {
            res.render("miPerfil")
        })
    },
    editarProducto: function(req,res){
        let id = req.params.id
        db.Producto.findByPk(id)
         .then(function(edicion){
             console.log(edicion)
            res.render ("editarProductos" , {edicion: edicion}); 
        //  primero pongo a la vista que va y despues con edicion:edicion me trae toda la informacion
         })
    },
   update: function(req,res){
       let productoid= req.body.idProducto
       let usuarioid= req.body.idUsuario
       if (req.session.usuarioLogueado == undefined){ //si el usuario no esta logueado lo manda a que se registre
        res.redirect("/home/login")
       }
         else if (usuarioid != req.session.usuarioLogueado.id) {
         res.send("No es posible editar este producto")
     }
     else{
        let edicion= {
            nombre: req.body.nombreproducto,
            precio: req.body.precio,
           //  foto: req.body.fotoproducto,
            descripcion: req.body.descripcion,
            colores: req.body.variedades,
            personalizacion: req.body.personalizacion,
            opciones_envio: req.body.envio,
            opciones_pago: req.body.pago,
   //El primero es el nombre que esta en database, models, y req.body.El nombre que aparece en el input del formulario
        }
       db.Producto.update(edicion, {
           where: [
               {id: productoid}
           ]
           })
       .then(function(){
           res.redirect("/emprendedores/miperfil")
       }) 
     }
     
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