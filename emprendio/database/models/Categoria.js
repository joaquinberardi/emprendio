module.exports = (sequelize, dataTypes) => {
    let alias = "categoria";
    let cols = {
        id: {
            autoIncrement: false,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        categoria: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "categorias",
        timestamps: false
    }
    let Categoria = sequelize.define (alias, cols, config);

    return Categoria;
}