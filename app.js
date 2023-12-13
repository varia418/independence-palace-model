const express=require("express");
var path=require('path');
const db=require("./models");
var createError=require('http-errors');
var indexRouter=require('./routes/index');

require('dotenv').config();

const app=express();

global.__basedir=__dirname+"/..";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message=err.message;
    res.locals.error=req.app.get('env')==='development'? err:{};

    // render the error page
    res.status(err.status||500);
    res.render('error');
});

db.sequelize.sync({ force: true }).then(() => {
    console.log("Database is synced.");
});

let port=8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});