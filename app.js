const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}));

const operationsRouter = require('./routes/operations');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/operations', operationsRouter);
app.use('/users', usersRouter)


// start the Express server
app.listen( port, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/alkemy-db');
        console.log( `server started at http://localhost:${ port }` );
    } catch (error) {
        throw new Error(error);

    }

} );