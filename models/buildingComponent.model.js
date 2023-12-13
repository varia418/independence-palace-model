module.exports = (sequelize, Sequelize) => {
    const BuildingComponent = sequelize.define("buildingComponent", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return BuildingComponent;
};