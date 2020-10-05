module.exports = (sequelize, dataTypes) => {
    let alias = "producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        nombre: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
        precio: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        categoria_id: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        foto: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        descripción: {
            AllowNull: true,
            type: dataTypes.TEXT,
        },
        usuario_id: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        stock: {
            AllowNull: true,
            type: dataTypes.INTEGER,
        },
        opciones_envio: {
            AllowNull: true,
            type: dataTypes.TEXT,
        },
        opciones_pago: {
            AllowNull: true,
            type: dataTypes.TEXT,
        },
        ubicacion: {
            AllowNull: true,
            type: dataTypes.TEXT,
        },
        colores: {
            AllowNull: true,
            type: dataTypes.TEXT,
        },
        personalizacion: {
            AllowNull: true,
            type: dataTypes.TEXT,
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }
    let Producto = sequelize.define (alias, cols, config);

    return Producto;
}