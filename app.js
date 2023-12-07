const express = require("express");
var path = require('path');
const db = require("./models");
var indexRouter = require('./routes/index');

const app = express();

global.__basedir = __dirname + "/..";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

db.sequelize.sync().then(() => {
    console.log("Database is synced.");
});

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});