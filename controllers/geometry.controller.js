const db = require("../models");
const Box = db.box;

const renderDDL = async (req, res) => {
    try {
        const boxes = await Box.findAll();
        const data = {
            boxes
        }
        res.render('map', { data: JSON.stringify(data) });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving boxes.",
        });
    }
};

module.exports = {
    renderDDL
};