const db=require("../models");
const Box=db.box;
const Pyramid=db.pyramid;
const Cylinder=db.cylinder;
const Sphere=db.sphere;
const Plane=db.plane;

const getGeometries=async (req, res) => {
    try {
        let boxes=await Box.findAll({raw : true});
        let pyramids=await Pyramid.findAll({raw : true});
        let cylinders=await Cylinder.findAll({raw : true});
        let spheres=await Sphere.findAll({raw : true});
        let planes=await Plane.findAll({raw : true});

        boxes = boxes.map(box => {
            return {
                ...box,
                type: "box"
            }
        });
        pyramids = pyramids.map(pyramid => {
            return {
                ...pyramid,
                type: "pyramid"
            }
        });
        cylinders = cylinders.map(cylinder => {
            return {
                ...cylinder,
                type: "cylinder"
            }
        });
        spheres = spheres.map(sphere => {
            return {
                ...sphere,
                type: "sphere"
            }
        });
        planes = planes.map(plane => {
            return {
                ...plane,
                type: "plane"
            }
        });

        const result = [].concat(boxes, pyramids, cylinders, spheres, planes);
        res.json(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message||"Some error occurred while retrieving boxes.",
        });
    }
};

module.exports={
    getGeometries
};