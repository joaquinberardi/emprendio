let db = require ("../database/models");
let sequelize = db.sequelize;
let bcrypt = require ("bcryptjs")

let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  
    },
    login: function(req,res){
        let pagina= "login"
        res.render ("login",{pagina:pagina}) //LISTO
    },
    registro: function(req,res){
        res.render("registro")
    },

    respuesta: function(req,res){
        res.render("respuesta")
    },

registroComprador: function(req,res){
    return res.render("registroComprador")

},

registroVendedor: function(req,res){
    return res.render("registroVendedor")

},
registroAdmin: function(req,res){
    return res.render("registroAdmin")

},

// VENDEDOR
guardarVendedor: function(req,res){ 
    let vendedor = {
        Nombre: req.body.nombre,
        Apellido: req.body.apellido,
        Mail: req.body.mail,
        DNI: req.body.dni,
        NombreUsuario: req.body.nombreUsuario,
        Contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        RedSocial: req.body.redSocial,
        Foto: req.body.fotoPerfil,
        TiempoCreacion: req.body.tiempoCreacion,
        Historia: req.body.historia,
        Integrantes: req.body.integrantes,
        Empleados: req.body.empleados,
        TipoUsuario_id: 2,

    }

    db.Usuario.create(vendedor)
    .then(function(){
        res.redirect("/home/respuesta");
    })

},

// ADMINISTRADOR
guardarAdmin: function(req,res){
    let admin = {
        Nombre: req.body.nombre,
        Apellido: req.body.apellido,
        Mail: req.body.mail,
        NombreUsuario: req.body.nombreUsuario,
        Contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        TipoUsuario_id: 3,
    }

    db.Usuario.create(admin)

    .then(function(){
        res.redirect("/home/login");
    })

},

    preguntasFrecuentes: function(req,res){
        res.render ("faqs") // LISTO
    },
    quienesSomos: function(req,res){
        res.render ("quienesSomos") // LISTO
    },
    // buscar: function(req,res){
    //     res.render ("resultadoBusqueda")
    // },
    aprobacionVendedor: function(req,res){
        res.render ("aprobacionVendedor")  // LISTO 
    },  
    feed: function(req,res){
        db.Producto.findAll()
            .then (function(productos){
                res.render("feed", {productos:productos})
            })
    },

    contacto: function(req,res){
        res.render ("contacto") //
    },
    estilos: function(req,res){
        res.render ("estilos") //
    },

//BUSCADOR

search: function (req,res) {
    let loQueBuscoElUsuario = req.query;
    res.send(loQueBuscoElUsuario);
}

}


// FIND

module.exports= emprendioControllers;