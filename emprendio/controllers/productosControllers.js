let db = require ("../database/models");
// const { where } = require("sequelize/types");
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
        // res.send(detalle)
         res.render("detallePost", {detalle: detalle});
       })
    },
    comprarProductos: function(req,res){
        return res.render ("comprarProductos") // Que tiene que mostrar?
    },
    favoritos: function(req,res){
        return res.render ("favoritos") // LISTO
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
       carrito: function (req,res) {
        db.Producto.findAll(
            {
                where: {
                    id: req.session.carrito
                }
            }
        )
        .then(function(productos){
            res.render("carrito", {productos: productos})
        })      
    },
    agregarCarrito: function (req, res) {
       
        let productoId  = req.params.id
       if (req.session.carrito != undefined) {
        req.session.carrito = [...req.session.carrito, productoId]
         
       } else {
           req.session.carrito = [productoId]
       }
       console.log(req.session)
       res.redirect('/productos/carrito') 
    },

    eliminarCarrito: function (req, res) {
        let productoId  = req.params.id
        let posicion = req.session.carrito.indexOf(productoId)

        if (posicion > -1) {
            req.session.carrito.splice(posicion,1)
        }
       res.redirect('/productos/carrito') 
    }    
    
}

module.exports= productosControllers;