const operationsModel = require("../schemas/operations");

const operationsService = {

    create: async (operation) => {
        return operationsModel.create(operation)
    },

    //get from newest to oldest.
    get: async () => {
        return operationsModel.find({}).sort({_id:-1});
    },

    patch: async (id, operation) => {
        return operationsModel.updateOne({_id: id}, {$set: {Concept: operation.concept, Amount: operation.amount, Date: operation.date}})
    },

    delete: async (id) => {
        return operationsModel.deleteOne({_id: id})
    }
}

module.exports = operationsService