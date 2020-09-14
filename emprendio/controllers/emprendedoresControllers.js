let emprendedoresControllers= { 
    perfiles: function(req,res){      // ESTE ES EL MAIN */*
        res.render ("detalleUsuario") // LISTO 
    },
    agregarPost: function(req,res){
        res.render ("agregarPost") // LISTO 
    },
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO
    }
}

module.exports= emprendedoresControllers;