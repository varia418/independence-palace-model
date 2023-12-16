module.exports = (sequelize, Sequelize) => {
    const Cylinder = sequelize.define("cylinder", {
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

    return Cylinder;
};