let db = require ("../database/models");
let sequelize = db.sequelize;

let productosControllers= {
    productos: function(req,res){
        db.Producto.findAll()
            .then (function(productos){
                res.render("productos", {productos:productos})
            })
    },
    detalleId: function(req,res){
       let idProductos= req.params.id
       db.Producto.findByPk(idProductos)
       .then(function(detalle) {
         res.render("detallePost", {detalle: detalle});
       })
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
    comentario: function(req,res){
        let comentario= req.body.comentario
        let detalle= req.body.idDelDetalle
    //      db.Pregunta.create({
            
    //  })
        res.redirect("/productos/detalle/" + detalle)
    },
}

module.exports= productosControllers;