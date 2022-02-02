const usersModel = require("../schemas/users");
const bcrypt = require('bcryptjs');

    const create = async (user) => {
        const findUser = await find(user.email)

        if (findUser) {
            throw Error("User already exists.")
        }

        const encryptedPass = await bcrypt.hash(user.password, 8);
        return usersModel.create({Email: user.email, Password: encryptedPass})
    }

    const find = async (email) => {
        return usersModel.findOne({Email: email});
    }

module.exports = {create}