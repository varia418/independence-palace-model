module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        x: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        y: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        z: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });

    return Location;
};