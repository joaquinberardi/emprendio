let emprendioControllers= {
    home: function(req,res){
        res.render ("home")
    },
    login: function(req,res){
        res.render ("login")
    },
    registroAdmin: function(req,res){
        res.render ("registroAdmin")
    },
    registroComprador: function(req,res){
        res.render ("registroComprador")
    },
    registroVendedor: function(req,res){
        res.render ("registroVendedor")
    },
    carrito: function(req,res){
        res.render ("carrito")
    },
    preguntasFrecuentes: function(req,res){
        res.render ("preguntasFrecuentes")
    },

}

module.exports= emprendioControllers;