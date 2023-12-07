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
        buildingComponentId: {
            type: Sequelize.INTEGER,
        },
        locationId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sizeId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rotateId: {
            type: Sequelize.INTEGER,
        },
        offsetId: {
            type: Sequelize.INTEGER,
        }
    });

    return Box;
};