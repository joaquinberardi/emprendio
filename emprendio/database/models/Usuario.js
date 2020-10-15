module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        Nombre: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
        Apellido: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
        DNI: {
            AllowNull: true,
            type: dataTypes.INTEGER,
            unique: true,
        },
        Mail: {
            AllowNull: false,
            type: dataTypes.STRING,
            unique: true,
        },
        NombreUsuario: {
            AllowNull: false,
            type: dataTypes.STRING,
            unique: true,
        },
        Contraseña: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
        RedSocial: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        Foto: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
      
        Historia: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        Integrantes: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        Empleados: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        TipoUsuario_id: {
            AllowNull: true,
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define (alias, cols, config);

    return Usuario;
}

// var express = require('express');
// var router = express.Router();
// var emprendedoresController = require("../../controllers/emprendedoresControllers")

// router.get("/", emprendedoresController.list);

// module.exports = router;