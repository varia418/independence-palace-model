module.exports = (sequelize, Sequelize) => {
    const Sphere = sequelize.define("sphere", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING(7)
        }
    });

    return Sphere;
};