let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  *(href)
    },
    login: function(req,res){
        let pagina= "login"
        res.render ("login",{pagina:pagina}) //LISTO  *(href)
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
        res.render ("faqs") // LISTO *(href)
    },
    buscar: function(req,res){
        res.render ("resultadoBusqueda")  // LISTO *(href)
    },
}

module.exports= emprendioControllers;