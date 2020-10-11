let db = require ("../database/models");
let sequelize = db.sequelize;

// CONTROLADORES
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
    quienesSomos: function(req,res){
        res.render ("quienesSomos") // LISTO
    },
    buscar: function(req,res){
        res.render ("resultadoBusqueda")  // LISTO 
    },
    aprobacionVendedor: function(req,res){
        res.render ("aprobacionVendedor")  // LISTO 
    },  
    feed: function(req,res){
        db.Producto.findAll()
            .then (function(productos){
                res.render("feed", {productos:productos})
            })
    },

    contacto: function(req,res){
        res.render ("contacto") //
    },
    estilos: function(req,res){
        res.render ("estilos") //
    }
}

// FIND

module.exports= emprendioControllers;