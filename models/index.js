const dbConfig=require("../config/db.config.js");
const fs=require('fs');
const path=require('path');

const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

const basename=path.basename(__filename);
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.')!==0&&
            file!==basename&&
            file.slice(-3)==='.js'&&
            file.indexOf('.test.js')===-1
        );
    })
    .forEach(file => {
        const model=require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name]=model;
    });




db.box.belongsTo(db.location);
db.pyramid.belongsTo(db.location);
db.cylinder.belongsTo(db.location);
db.sphere.belongsTo(db.location);
db.plane.belongsTo(db.location);

db.box.belongsTo(db.size);
db.pyramid.belongsTo(db.size);
db.cylinder.belongsTo(db.size);
db.sphere.belongsTo(db.size);
db.plane.belongsTo(db.size);

db.building.belongsTo(db.rotate);
db.buildingComponent.belongsTo(db.rotate);
db.box.belongsTo(db.rotate);
db.pyramid.belongsTo(db.rotate);
db.cylinder.belongsTo(db.rotate);
db.sphere.belongsTo(db.rotate);
db.plane.belongsTo(db.rotate);

db.building.belongsTo(db.offset);
db.buildingComponent.belongsTo(db.offset);
db.box.belongsTo(db.offset);
db.pyramid.belongsTo(db.offset);
db.cylinder.belongsTo(db.offset);
db.sphere.belongsTo(db.offset);
db.plane.belongsTo(db.offset);

db.box.belongsTo(db.buildingComponent);
db.pyramid.belongsTo(db.buildingComponent);
db.cylinder.belongsTo(db.buildingComponent);
db.sphere.belongsTo(db.buildingComponent);
db.plane.belongsTo(db.buildingComponent);

db.buildingComponent.belongsTo(db.building);

module.exports=db;