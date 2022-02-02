const operationsService = require("../services/operations");

const operationsController = {
    create: async (req, res) => {
        try {
            const operation = req.body
            const result = await operationsService.create(operation)
            res.send(result).status(201)
        } catch (error) {
            res.send(error)
        }
    },
    get: async (_req, res) => {
        try {
            const operations = await operationsService.get()
            res.send(operations).status(200)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = operationsController