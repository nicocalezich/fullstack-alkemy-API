const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const operationsModel = mongoose.model('Operations', new Schema(
    { Concept: String, Amount: Number, Date: Date, isExpense: Boolean }
));

module.exports = operationsModel