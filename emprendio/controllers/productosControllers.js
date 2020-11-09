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
       db.Producto.findByPk(idProductos, {
        include: [{all: true, nested:true}], //PORQUE HAY MUCHAS RELACIONES ENTRE TABLAS
       })
       .then(function(detalle) {
        //res.send(detalle)
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
         if (req.session.usuarioLogueado == undefined){ //si el usuario no esta logueado y quiere comentar lo manda a que se registre
            res.redirect("/home/login")
            }
         else {
            let comentario= req.body.comentario
            let detalle= req.body.idDelDetalle
             db.Pregunta.create({
                pregunta: comentario,
                producto_id: detalle,
                usuario_id: req.session.usuarioLogueado.id,
                respuesta: "No", //no hay respuesta
      }) .then(function(resultado){
        res.redirect("/productos/detalle/" + detalle)
      })
 }
    },
}

module.exports= productosControllers;