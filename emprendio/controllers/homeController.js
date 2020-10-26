let db = require ("../database/models");
let sequelize = db.sequelize;
let bcrypt = require ("bcryptjs");
// const { Op } = require("sequelize/types");
let op = db.Sequelize.Op;
const session = require ("express-session");

let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  
    },
    login: function(req,res){
        if (req.session.usuarioLogueado != undefined){
            // Si el usuario está logueado, te lleva a la página del inicio
            res.redirect("/")
        }
        let pagina= "login"
        res.render ("login",{pagina:pagina}) //LISTO
    },
    registro: function(req,res){
        if (req.session.usuarioLogueado != undefined){
            res.redirect("/")
        }
        res.render("registro")
    },

    respuesta: function(req,res){
        res.render("respuesta")
    },

registroComprador: function(req,res){
    if (req.session.usuarioLogueado != undefined){
        res.redirect("/")
    }
    return res.render("registroComprador")

},

registroVendedor: function(req,res){
    if (req.session.usuarioLogueado != undefined){
        res.redirect("/")
    }
    return res.render("registroVendedor")

},
registroAdmin: function(req,res){
    if (req.session.usuarioLogueado != undefined){
        res.redirect("/")
    }
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
    buscar: function (req,res) {
        let resultadoBusqueda = req.query.buscador123;
        // res.render ("resultadoBusqueda");

        db.Producto.findAll( 
        {
            where: [
            {nombre: { [op.like]: "%"+ resultadoBusqueda + "%"}}
            ],
            order: ["nombre"],
        }
        )
            
    .then(function(productos) { 
        //    res.render("resultadoBusqueda", {productos: productos}) 
        db.Usuario.findAll( 
        {
        where: [
            {nombreUsuario: { [op.like]: "%"+ resultadoBusqueda + "%"}}
        ],
        order: ["nombreUsuario"],
        }
    )
        
    .then(function(usuarios) { 
        res.render("resultadoBusqueda", {productos: productos, usuarios: usuarios}) 
    })
        //    res.send(resultadoBusqueda)      
    })
    },

    procesologin: function (req, res){
        db.Usuario.findOne({
            where: [
                {Mail: req.body.email},
                {NombreUsuario: req.body.email}
            ]
        })
        .then(function(usuario){
            if (usuario == null) {
                res.send ("El mail no existe")
            }
            else if (bcrypt.compareSync(req.body.password, usuario.Contraseña) == false){
                res.send ("La contraseña es incorrecta")
            }
            else{
                req.session.usuarioLogueado = usuario;
                if (usuario.TipoUsuario_id == 2){
                    res.redirect ("/emprendedores/miPerfil")
                }
                else if (usuario.TipoUsuario_id == 1) {
                    res.redirect ("/productos")
                }
                else{
                    res.redirect ("/usuario/admin")
                }
            }
        })
    },
    cerrarsesion: function(req, res){
        req.session.usuarioLogueado = undefined;
        res.redirect("/")
    }

}

module.exports= emprendioControllers;