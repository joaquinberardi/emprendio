let usuarioControllers = {
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO
    },
    favoritos: function(req,res){
        res.render ("favoritos")
    },
    carrito: function(req,res){
        res.render ("carrito") // LISTO
    },
    panelAdmin: function (req,res){
        res.render ("panelAdmin")
    }
} 
 // borrar productos

module.exports= usuarioControllers;