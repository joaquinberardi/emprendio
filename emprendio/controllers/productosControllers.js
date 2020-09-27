let productosControllers= {
    productos: function(req,res){
        return res.render ("productos") //LISTO
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

module.exports= productosControllers;