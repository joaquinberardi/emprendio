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