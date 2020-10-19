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
        res.render ("agregarPost") // LISTO 
    },
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO
    },
    agregarProductos: function(req,res){
        return res.render ("agregarPost") // LISTO
    },
    editarProducto: function(req,res){
        return res.render ("editarProductos") //LISTO
    },
    // agregarEmprendedor: function(req,res){//FALTA TERMINAR
    //     db.emprendedores.create
    //         .then (function(emprendedores){
    //             res.render("emprendedores", {emprendedores:emprendedores})

        
    //             res.redirect("/")
    //         }
    // },
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