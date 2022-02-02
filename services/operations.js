const operationsModel = require("../schemas/operations");

const operationsService = {
    create: async (operation) => {
        return operationsModel.create(operation)
    },
    get: async () => {
        return operationsModel.find({}).lean()
    }
}

module.exports = operationsService