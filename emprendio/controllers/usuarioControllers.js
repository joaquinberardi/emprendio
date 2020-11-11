const db = require("../database/models")

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

    eliminandousuario: function(req,res){
        
        let idUsuario = req.body.emprendedor;

            db.Usuario.destroy(
            {   where: {
                    id: idUsuario
            } 
            })
            
            .then(function(){
                res.redirect("/usuario/admin")
            })

            // Error con usuarios viejos?
    
    },
    aprobarvendedor: function(req,res){
        
        let idUsuario = req.body.emprendedor;
        let edicion= {
            TipoUsuario_id: 2,
        }
            db.Usuario.update( edicion, {
               where: [
                { TipoUsuario_id: 2} 
                ]
            })
            .then(function(){
                res.render("panelAdmin")
            })

            // EL PROBLEMA ESTA EN ELIMINAR ADMINS 
            // MISMO TIPO USUARIO??!!
    
    },
    panelAdmin: function (req,res){

        db.Usuario.findAll()
        .then(function(usuarios){ // --> Quiero mostrar la cantidad total de productos
            //res.send(usuarios)

            db.Producto.findAll()
            .then(function(productos){ // --> Quiero mostrar la cantidad total de productos

                res.render('panelAdmin', {usuarios:usuarios, productos:productos}) 
            })

        })
    },
    listaemprendedores: function (req,res){

        db.Usuario.findAll()
        .then(function(usuarios){ // --> Quiero mostrar la cantidad total de productos
            //res.send(usuarios)

                res.render('listaemprendedores', {usuarios:usuarios}) 
            })

        },
    listaproductos: function (req,res){

        db.Producto.findAll()
        .then(function(productos){ // --> Quiero mostrar la cantidad total de productos
            //res.send(usuarios)

                res.render('listaproductos', {productos:productos}) 
            })

        }  
    } 
 // borrar productos

module.exports= usuarioControllers;