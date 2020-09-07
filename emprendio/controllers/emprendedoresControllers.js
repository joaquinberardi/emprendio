let emprendedoresControllers= {
    buscarPerfiles: function(req,res){
        res.render ("buscarPerfiles")
    },
    agregarPost: function(req,res){
        res.render ("agregarPost")
    },
    perfiles: function(req,res){
        res.render ("perfiles")
    },
    miperfil: function(req,res){
        res.render ("miPerfil")
    }
}

module.exports= emprendedoresControllers;