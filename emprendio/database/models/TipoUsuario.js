module.exports = (sequelize, dataTypes) => {
    let alias = "TipoUsuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        tipoUsuario: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "tipoUsuario_id",
        timestamps: false
    }
    let TipoUsuario = sequelize.define (alias, cols, config);

    return TipoUsuario;
}