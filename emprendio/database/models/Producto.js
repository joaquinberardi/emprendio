module.exports = (sequelize, dataTypes) => {
    let alias = "Producto";
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
        descripcion: {
            AllowNull: true,
            type: dataTypes.STRING,
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
            type: dataTypes.STRING,
        },
        opciones_pago: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        ubicacion: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        colores: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
        personalizacion: {
            AllowNull: true,
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }
    let Producto = sequelize.define (alias, cols, config);

    return Producto;
}