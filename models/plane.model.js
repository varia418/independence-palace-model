module.exports = (sequelize, Sequelize) => {
    const Plane = sequelize.define("plane", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        },
        facing: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING(7)
        }
    });

    return Plane;
};