let usuarioControllers = {
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO
    },
    favoritos: function(req,res){
        res.render ("favoritos")
    },
    carrito: function(req,res){
        res.render ("carrito") // LISTO
    }
} 
 // editar y borrar productos
// favoritos
// carrito

module.exports= usuarioControllers;