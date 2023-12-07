module.exports = (sequelize, Sequelize) => {
    const Rotate = sequelize.define("rotate", {
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

    return Rotate;
};