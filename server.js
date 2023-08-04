const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

dotenv.config();

//Connect to mongodb and log error if unsuccesfull
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log(err);
    });


app.use(bodyParser.json())


// Initialize routes
app.use('/api', require('./routes/api'));


//Listen for requests
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
});
