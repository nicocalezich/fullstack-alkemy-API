const {create} = require("../services/users");

const usersController = {

    create: async (req, res) => {
        try {
            const user = req.body
            const result = await create(user)
            res.send(result).status(201)
        } catch (error) {
            res.send(error.message)
        }
    },
}

module.exports = usersController