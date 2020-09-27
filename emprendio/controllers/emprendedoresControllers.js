const { favoritos } = require("./productosControllers");

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
        return res.render ("editarProductos") // Que tiene que mostrar?
    },
}

module.exports= emprendedoresControllers;