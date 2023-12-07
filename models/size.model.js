module.exports = (sequelize, Sequelize) => {
    const Size = sequelize.define("size", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        width: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        height: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        depth: {
            type: Sequelize.FLOAT,
        }
    });

    return Size;
};