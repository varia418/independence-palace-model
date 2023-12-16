module.exports = (sequelize, Sequelize) => {
    const Box = sequelize.define("box", {
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

    return Box;
};