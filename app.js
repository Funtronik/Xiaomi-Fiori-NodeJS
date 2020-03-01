const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://LuigianaMain:'+ process.env.mongoosePW +'@main-t6dbn.mongodb.net/test?authSource=admin&replicaSet=Main-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')

const xiaomiRoutes = require('./API/routes/xiaomiRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/xiaomi', xiaomiRoutes);

//Errors handling
app.use((req, res, next) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});
module.exports = app;