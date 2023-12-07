module.exports = (sequelize, Sequelize) => {
    const Offset = sequelize.define("offset", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        x: {
            type: Sequelize.FLOAT,
        },
        y: {
            type: Sequelize.FLOAT,
        },
        z: {
            type: Sequelize.FLOAT,
        }
    });

    return Offset;
};