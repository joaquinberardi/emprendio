module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";
    let cols = {
        id: {
            autoIncrement: true,
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