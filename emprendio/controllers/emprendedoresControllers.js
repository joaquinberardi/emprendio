let db = require ("../database/models/index");
let sequelize = db.sequelize;
let bcrypt = require ("bcryptjs")
let op = db.Sequelize.Op;
const { Op } = require("sequelize");

const { favoritos, productos } = require("./productosControllers");

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
            usuario_id: req.session.usuarioLogueado.id // LE GUARDO EL ID DE USUARIO LOGUEADO
            
            // VAS A LA CARPETA DATABASE, DESPUES A LA CARPETA MODELS, Y EN EL ARCHIVO PRODUCTO.JS, PONES TODOS LOS ATRIBUTOS PRINCIPALES (SIN CONTAR ID),
            // OSEA NOMBRE, PRECIO, CATEGORIA_ID, FOTO, ETC. IMPORTANTE --> PONELOS EXACTAMENTE IGUAL QUE COMO ESTÁN ESCRITOS, SIN MAYÚSUCLA, SIN TILES Y CON LOS "_"
            // DESPUÉS PONES DOS PUNTOS Y EN TODOS PONES REQ.BODY. Y DESPUÉS DEL PUNTO TENES QUE FIJARTE LO QUE DICE EN EL FORMULARIO EN EL ARCHIVO AGREGAR POST
            // EN CADA INPUT, TE FIJAS EN LOS ATRIBUTOS "NAME", Y PONES EL NOMBRE QUE TENGA EN CADA UNO.
        }

        db.Producto.create(agregarPost)
        .then(function(){
            res.redirect("/emprendedores/miperfil/" + agregarPost.usuario_id ); // ACA REDIRIGE A miperfil/2 Y ESTA MAL! Funciona igual XD
        })
    },
    /*miperfil: function(req,res){ 
        //let idEmprendedores = req.params.id
        //db.Usuario.findByPk (idEmprendedores)
        //.then(function (emprendedor) {
        res.render ("miPerfil") // LISTO
        //})


    },*/

    miperfil: function(req,res){ 
        //let idEmprendedores = req.params.id
        //db.Usuario.findByPk (idEmprendedores)
        //.then(function (emprendedor) {
       
        //})
        db.Producto.findAll({
            include: [{association:'usuarioProducto'}]
        })
        
        .then(function(productos){
            //res.send(productos)
            return res.render("miPerfil", {productos:productos})
    
            return res.send(productos)
    
            //.then(function(productos){
            //db.Usuario.findAll()
            
            //.then(function(usuarios){
    
           // })
        })
        .catch(function(error){
            console.log(error)
        })

    },
    emprendedorPerfil: function(req,res){ 
        let idEmprendedores = req.params.id
        db.Usuario.findByPk (idEmprendedores,
            {
            include: [
                {association: "productoUsuario"},
            ]
        
        })
        .then(function(emprendedor)  {
           
                res.render("emprendedor", { emprendedor }); // LISTO
            })


    },
    agregarProductos: function(req,res){
        return res.render ("agregarProductos")
        .then(function() {
            res.render("miPerfil")
         }) // LISTO
    },
    borrar: function(req,res){
         let idProductoBorrar = req.body.idProducto123;
         db.Producto.destroy(
         { where: {
             id: idProductoBorrar
         }
        })
        .then(function() {
          //  res.send(req.session.usuarioLogueado)
            res.redirect("/emprendedores/miperfil/" + req.session.usuarioLogueado.id);            
            // Este no funciona por alguna razon, SI elimina el producto
        })
    },
    editarProductos: function(req,res){
        let id = req.params.id
        if (req.session.usuarioLogueado == undefined){ //si el usuario no esta logueado lo manda a que se registre
            res.redirect("/home/login")
           }
           else{
        db.Producto.findByPk(id)
         .then(function(edicion){
             //res.send(req.session.usuarioLogueado.id)
            res.render ("editarProductos" , {edicion: edicion}); 
        //  primero pongo a la vista que va y despues con edicion:edicion me trae toda la informacion
         })}
    },
   update: function(req,res){
       let productoid= req.body.idProducto
       let usuarioid= req.body.idUsuario // 
         if (usuarioid != req.session.usuarioLogueado.id) { //Si el producto que quiere editar no le pertenece
        //   res.send("No es posible editar este producto")
        res.redirect("/productos")
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
           res.redirect("/emprendedores/miperfil/" + usuarioid)
       }) 
    }
    },

guardar: function(req,res){
    db.Usuario.findOne({
    where: {
       [Op.or]:[{NombreUsuario: req.body.NombreUsuario}, {Mail: req.body.mail}]
    }
    })
    .then(function(usuario){
        if (usuario != undefined) {
            let mensajeErrorRegistro = "No es posible crear una cuenta con el mail o nombre de usuario ingresado. Por favor intente nuevamente."
            res.render("registroComprador", {mensajeErrorRegistro})
        }
        else{
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
    })
},

    editarEmprendedores: function(req,res){
        let id = req.params.id
        db.Usuario.findByPk(id)
        .then(function(edicion){
            console.log(edicion)
        
            res.render ("editarEmprendedores", {edicion: edicion})
        })
            
    },
    
    edito: function(req,res){
      
     
      
        let usuarioid= req.params.id
       // if (req.session.usuarioLogueado == undefined){ //si el usuario no esta logueado lo manda a que se registre
        //    return res.redirect("/home/login")
        //   }
        
         //    else if (usuarioid != req.session.usuarioLogueado.id) {
             //res.send("No es posible editar la información")
          //   return res.redirect("/emprendedores")
          //  }
        
            //else{
            let edicion= {
                Nombre: req.body.nombre,
                Apellido: req.body.apellido,
                DNI:req.body.dni,
                Mail:req.body.mail,
                NombreUsuario:req.body.nombreUsuario,
                Contraseña:req.body.contraseña,
                RedSocial:req.body.RedSocial,
                Foto:req.body.fotoPerfil,
                TiempoCreacion:req.body.tiempoCreacion,
                Historia:req.body.historia,
                Integrantes:req.body.integrantes,
                Empleados:req.body.empleados,
                
    }
//}
    
    db.Usuario.update(edicion, {
        where:[
            {id: usuarioid}
        ]
    })
    .then(function(){
        req.session.usuarioLogueado = edicion
        res.redirect("/emprendedores/miperfil/"  + usuarioid)
    
    
        /*if (req.session.usuarioLogueado == undefined){ //si el usuario no esta logueado lo manda a que se registre
         res.redirect("/home/login")
        }
         else if (usuarioid != req.session.usuarioLogueado.id) {
            res.send("No es posible editar el perfil")
        }
        else{
            let edicion= {
                Nombre: req.body.nombre,
                Apellido: req.body.apellido,
                DNI:req.body.dni,
                Mail:req.body.mail,
                NombreUsuario:req.body.nombreUsuario,
                Contraseña:req.body.contraseña,
                RedSocial:req.body.RedSocial,
                Foto:req.body.fotoPerfil,
                TiempoCreacion:req.body.tiempoCreacion,
                Historia:req.body.historia,
                Integrantes:req.body.integrantes,
                Empleados:req.body.empleados,
                
    }
    db.Emprendedor.update(edicion, {
        where:[
            {id: usuarioid}
        ]
    })
    .then(function(){
        res.redirect("/emprendedores/miperfil")
    })
} */
    
})
}
}
module.exports=emprendedoresControllers;
    
