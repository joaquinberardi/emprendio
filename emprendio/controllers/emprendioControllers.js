let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  *(href)
    },
    login: function(req,res){
        res.render ("login") //LISTO  *(href)
    },
    registroAdmin: function(req,res){
        res.render ("registroAdmin") // LISTO  *(href)
    },
    registroComprador: function(req,res){
        res.render ("registroComprador") // LISTO *(href)
    },
    registroVendedor: function(req,res){ 
        res.render ("registroVendedor") // LISTO *(href)
    },
    carrito: function(req,res){
        res.render ("carrito") // A donde conecta?
    },
    preguntasFrecuentes: function(req,res){
        res.render ("preguntasFrecuentes") // A donde conecta?
    },

}

module.exports= emprendioControllers;