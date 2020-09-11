let productosControllers= {
    productos: function(req,res){
        res.render ("productos") // Que tiene que mostrar?
    },
    detalle: function(req,res){
        res.render ("detallePost") // LISTO *(href)
    },
    detalleId: function(req,res){
        var idProductos= req.params.id
        res.render ("detalleId") // Que tiene que mostrar?
    },
    buscarProductos: function(req,res){
        res.render ("resultadoBusqueda") // LISTO *(href)
    },
    editarProducto: function(req,res){
        res.render ("editarProductos") // Que tiene que mostrar?
    },
    comprarProductos: function(req,res){
        res.render ("comprarProductos") // Que tiene que mostrar?
    },
    favoritos: function(req,res){
        res.render ("favoritos") // Que tiene que mostrar?
    },
}

module.exports= productosControllers;