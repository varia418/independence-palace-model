module.exports = (sequelize, Sequelize) => {
    const Sphere = sequelize.define("sphere", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Sphere;
};