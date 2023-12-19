const db=require("../models");
const BuildingComponent=db.buildingComponent;
const Box=db.box;
const Pyramid=db.pyramid;
const Cylinder=db.cylinder;
const Sphere=db.sphere;
const Plane=db.plane;
const Location=db.location;
const Size=db.size;
const Rotate=db.rotate;
const Offset=db.offset;

const renderDDL=async (req, res) => {
    try {
        const components=await BuildingComponent.findAll({ include: { all: true } });

        const data=await Promise.all(components.map(async component => {
            const boxes=await Box.findAll({ where: { buildingComponentId: component.id }, include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }] });
            component.dataValues.boxes=boxes;
            const pyramids=await Pyramid.findAll({ where: { buildingComponentId: component.id }, include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }] });
            component.dataValues.pyramids=pyramids;
            const cylinders=await Cylinder.findAll({ where: { buildingComponentId: component.id }, include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }] });
            component.dataValues.cylinders=cylinders;
            const spheres=await Sphere.findAll({ where: { buildingComponentId: component.id }, include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }] });
            component.dataValues.spheres=spheres;
            const planes=await Plane.findAll({ where: { buildingComponentId: component.id }, include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }] });
            component.dataValues.planes=planes;

            return component;
        }));

        res.render('map', { data: JSON.stringify(data) });
    } catch (error) {
        res.status(500).send({
            message:
                error.message||"Some error occurred while retrieving boxes.",
        });
    }
};

module.exports={
    renderDDL
};