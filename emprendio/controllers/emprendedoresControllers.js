let emprendedoresControllers= {
    agregarPost: function(req,res){
        res.render ("agregarPost") // LISTO *(href)
    },
    perfiles: function(req,res){
        res.render ("perfilesVarios") // LISTO *(href) 
    },
    miperfil: function(req,res){ 
        res.render ("miPerfil") // LISTO *(href)
    }
}

module.exports= emprendedoresControllers;