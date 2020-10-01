let emprendioControllers= {
    home: function(req,res){ 
        res.render ("home") //LISTO  
    },
    login: function(req,res){
        let pagina= "login"
        res.render ("login",{pagina:pagina}) //LISTO
    },
    registro: function(req,res){
        res.render("registro")
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
    preguntasFrecuentes: function(req,res){
        res.render ("faqs") // LISTO
    },
    buscar: function(req,res){
        res.render ("resultadoBusqueda")  // LISTO 
    },
    aprobacionVendedor: function(req,res){
        res.render ("aprobacionVendedor")  // LISTO 
    },
    testing: function(req,res){
        res.render ("testing") //
    }
}

module.exports= emprendioControllers;