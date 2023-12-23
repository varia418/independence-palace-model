const db=require("../models");
const Box=db.box;
const Pyramid=db.pyramid;
const Cylinder=db.cylinder;
const Sphere=db.sphere;
const Plane=db.plane;
const Location=db.location;
const Size=db.size;
const Rotate=db.rotate;
const Offset=db.offset;


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

const getGeometry=async (req, res) => {
    try {
        const { type, id } = req.params;
        let result=await db[type].findByPk(id, {include: [{ model: Location }, { model: Size }, { model: Rotate }, { model: Offset }]});
        res.json(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message||"Some error occurred while retrieving boxes.",
        });
    }
};

const createGeometry=async (req, res) => {
    try {
        const {type, description, color, location, size, rotate, offset} = req.body;
        const data = {description, color}
        data.buildingComponentId = 33; // custom geometries
        const _location = await Location.create({x: location.x, y: location.y, z: location.z});
        data.locationId = _location.id;
        const _size = await Size.create({width: size.width, height: size.height, depth: size.depth});
        data.sizeId = _size.id;
        if (rotate) {
            const _rotate = await Rotate.create({x: rotate.x, y: rotate.y, z: rotate.z});
            data.rotateId = _rotate.id;
        }
        if (offset) {
            const _offset = await Offset.create({x: offset.x, y: offset.y, z: offset.z});
            data.offsetId = _offset.id;
        }
        const geometry = await db[type].create(data);
        res.send(`Geometry ${type}-${geometry.id} has been created successfully!`);
    } catch (error) {
        res.status(500).send({
            message:
                error.message||"Some error occurred while creating the geometry.",
        });
    }
}

const updateGeometry=async (req, res) => {
    try {
        const {type, description, color, location, size, rotate, offset} = req.body;
        const {id} = req.params;
        const data = {description, color}
        if (location) {
            const _location = await Location.create({x: location.x, y: location.y, z: location.z});
            data.locationId = _location.id;
        }
        if (size) {
            const _size = await Size.create({width: size.width, height: size.height, depth: size.depth});
            data.sizeId = _size.id;
        }
        if (rotate) {
            const _rotate = await Rotate.create({x: rotate.x, y: rotate.y, z: rotate.z});
            data.rotateId = _rotate.id;
        }
        if (offset) {
            const _offset = await Offset.create({x: offset.x, y: offset.y, z: offset.z});
            data.offsetId = _offset.id;
        }
        const geometry = await db[type].update(data, {where: {id}});
        res.send(`Geometry ${type}-${id} has been updated successfully!`);
    } catch (error) {
        res.status(500).send({
            message:
                error.message||"Some error occurred while updating the geometry.",
        });
    }
}

module.exports={
    getGeometries,
    getGeometry,
    createGeometry,
    updateGeometry
};