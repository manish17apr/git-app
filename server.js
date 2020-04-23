const express = require('express');
const config = require('./config/dev.config');
const mongoose = require('mongoose');

mongoose.connect(config.db)
    .then(() => console.log("db connected successfully"))
    .catch((error) => console.log(`DB connection error ${error}`))

const app = express();

app.listen(config.port, () => {
    console.log(`server running on port ${config.port}`)
});