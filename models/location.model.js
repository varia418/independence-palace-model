module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        x: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        y: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        z: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    });

    return Location;
};