let db = require ("../database/models/index");
let sequelize = db.sequelize;

// CONTROLADORES
let productosControllers= {
    productos: function(req,res){
        db.Producto.findAll()
            .then (function(productos){
                res.render("productos", {productos:productos})
            })
    },
    detalleId: function(req,res){
       // var idProductos= req.params.id
        return res.render ("detallePost") // LISTO
    },
    comprarProductos: function(req,res){
        return res.render ("comprarProductos") // Que tiene que mostrar?
    },
    favoritos: function(req,res){
        return res.render ("favoritos") // LISTO
    },
    carrito: function(req,res){
        res.render ("carrito") // LISTO
    },
}

// FIND

module.exports= productosControllers;