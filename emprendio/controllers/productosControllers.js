let productosControllers= {
    productos: function(req,res){
        res.render ("productos")
    },
    detalle: function(req,res){
        res.render ("detalle")
    },
    detalleId: function(req,res){
        var idProductos= req.params.id
        res.render ("detalleId")
    },
    buscarProductos: function(req,res){
        res.render ("buscarProductos")
    },
    editarProducto: function(req,res){
        res.render ("editarProductos")
    },
    comprarProductos: function(req,res){
        res.render ("comrparPorductos")
    },
    favoritos: function(req,res){
        res.render ("favoritos")
    },
}

module.exports= productosControllers;