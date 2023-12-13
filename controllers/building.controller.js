const db=require("../models");
const BuildingComponent=db.buildingComponent;
const Box=db.box;
const Location=db.location;
const Size=db.size;
const Rotate=db.rotate;
const Offset=db.offset;

const renderDDL=async (req, res) => {
    try {
        const components=await BuildingComponent.findAll({ include: { all: true } });
        res.render('map', { data: JSON.stringify(components) });
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