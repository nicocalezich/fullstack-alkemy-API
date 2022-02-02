const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}));

const reposRoute = require('./routes/operations');

app.use(express.json());
app.use('/operations', reposRoute);


// start the Express server
app.listen( port, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/alkemy-db');
        console.log( `server started at http://localhost:${ port }` );
    } catch (error) {
        throw new Error(error);

    }

} );