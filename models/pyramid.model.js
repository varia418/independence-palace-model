module.exports = (sequelize, Sequelize) => {
    const Pyramid = sequelize.define("pyramid", {
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

    return Pyramid;
};