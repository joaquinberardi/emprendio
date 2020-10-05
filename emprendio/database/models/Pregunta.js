module.exports = (sequelize, dataTypes) => {
    let alias = "Pregunta";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            AllowNull: false,
            type: dataTypes.INTEGER,
        },
        pregunta: {
            AllowNull: false,
            type: dataTypes.STRING,
        },
        producto_id: {
            AllowNull: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            AllowNull: true,
            type: dataTypes.INTEGER,
        },
        respuesta: {
            AllowNull: true,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "preguntas",
        timestamps: false,
    }
    let Pregunta = sequelize.define (alias, cols, config);

    return Pregunta;
}