const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.route");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// db.sequelize.sync();
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});