module.exports = (sequelize, Sequelize) => {
    const Building = sequelize.define("building", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        rotateId: {
            type: Sequelize.INTEGER,
        },
        offsetId: {
            type: Sequelize.INTEGER,
        }
    });

    return Building;
};