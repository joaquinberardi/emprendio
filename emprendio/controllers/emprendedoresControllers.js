let db = require ("../database/models/index");
let sequelize = db.sequelize;
let op = db.Sequelize.Op;

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
    agregarEmprendedor: function(req,res){ ?//FALTA TERMINAR
        db.emprendedores.create
            .then (function(emprendedores){
                res.render("emprendedores", {emprendedores:emprendedores})

        
        res.redirect("/")
    }
       }



// list: function (req, res) {
//     db.usuarios.findAll()
//     .then(function(usuarios){
//      res.render("perfilesVarios", {usuarios: usuarios})
//         })
// FIND




module.exports= emprendedoresControllers;