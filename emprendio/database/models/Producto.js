// ¡¡¡ESTÁ HECHA LA BASE DEL ARCHIVO PERO HAY QUE DETERMINAR LAS COLUMNAS DE LA TABLA Y LAS CARACTERÍSTICAS!!!

module.exports = (sequelize, dataTypes) => {
    let alias = "Nombre del modelo o nombre de la tabla";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "Nombre de la tabla",
        timestamps: false
    }
    const Producto = sequelize.define (alias, cols, config);

    return Producto
}