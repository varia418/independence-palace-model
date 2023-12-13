const db=require("../models");
const Box=db.box;
const Location=db.location;
const Size=db.size;
const Rotate=db.rotate;
const Offset=db.offset;

const renderDDL=async (req, res) => {
    try {
        const boxes=await Box.findAll({ include: { all: true } });
        const data={
            boxes
        }
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