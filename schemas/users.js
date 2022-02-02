const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const usersModel = mongoose.model('Users', new Schema(
    { Email: String, Password: String}
));

module.exports = usersModel