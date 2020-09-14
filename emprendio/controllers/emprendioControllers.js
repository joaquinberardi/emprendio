let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  
    },
    login: function(req,res){
        res.render ("login") //LISTO  
    },
    registroAdmin: function(req,res){
        res.render ("registroAdmin") // LISTO  
    },
    registroComprador: function(req,res){
        res.render ("registroComprador") // LISTO 
    },
    registroVendedor: function(req,res){ 
        res.render ("registroVendedor") // LISTO 
    },
    carrito: function(req,res){
        res.render ("carrito") // LISTO
    },
    preguntasFrecuentes: function(req,res){
        res.render ("faqs") // LISTO
    },
    buscar: function(req,res){
        res.render ("resultadoBusqueda")  // LISTO 
    },
}

module.exports= emprendioControllers;