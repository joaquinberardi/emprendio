module.exports = (sequelize, dataTypes) => {
    let alias = "Factura";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        producto_id: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        cantidad: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        precio: {
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "facturas",
        timestamps: false
    }
    let Factura = sequelize.define (alias, cols, config);

    return Factura;
}