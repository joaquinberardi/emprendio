let db = require ("../database/models/index");
let sequelize = db.sequelize;
let op = db.Sequelize.Op;

const { favoritos } = require("./productosControllers");

// CONTROLADORES
let emprendedoresControllers= { 
    perfiles: function(req,res){      // ESTE ES EL MAIN */*
        res.render ("perfilesVarios") // LISTO 
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
       }



// list: function (req, res) {
//     db.usuarios.findAll()
//     .then(function(usuarios){
//      require.render("perfilesVarios", {usuarios: usuarios})
//         })
// FIND




module.exports= emprendedoresControllers;