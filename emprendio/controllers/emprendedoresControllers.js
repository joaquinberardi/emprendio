let emprendedoresControllers= {
    buscarPerfiles: function(req,res){
        res.render ("buscarPerfiles") // A donde conecta?
    },
    agregarPost: function(req,res){
        res.render ("agregarPost") // Working
    },
    perfiles: function(req,res){
        res.render ("perfiles") // 
    },
    miperfil: function(req,res){
        res.render ("miPerfil")
    }
}

module.exports= emprendedoresControllers;