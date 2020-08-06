module.exports = (sequelize, DataTypes) => {
    return sequelize.define("image", {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.BLOB("long"),
        },
    });
};