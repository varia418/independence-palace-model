module.exports = (sequelize, Sequelize) => {
    const Plane = sequelize.define("plane", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Plane;
};