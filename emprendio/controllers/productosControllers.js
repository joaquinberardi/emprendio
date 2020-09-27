let productosControllers= {
    productos: function(req,res){
        return res.render ("productos") //LISTO
    },
    detalleId: function(req,res){
       // var idProductos= req.params.id
        return res.render ("detallePost") // Diseñar
    },
    buscarProductos: function(req,res){
        return res.render ("resultadoBusqueda") // LISTO 
    },
    editarProducto: function(req,res){
        return res.render ("editarProductos") // Que tiene que mostrar?
    },
    comprarProductos: function(req,res){
        return res.render ("comprarProductos") // Que tiene que mostrar?
    },
    favoritos: function(req,res){
        return res.render ("favoritos") // Que tiene que mostrar?
    },
    agregarProductos: function(req,res){
        return res.render ("agregarPost") // Que tiene que mostrar?
    },
}

module.exports= productosControllers;