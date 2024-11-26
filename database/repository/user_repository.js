const Users = require('../schema/user');

class UserRepository {
    async create(data) {
        return await Users.create(data);
    }

    async findByEmail(email) {
        return await Users.findOne({ where: { email } });
    }

    async findById(id) {
        return await Users.findByPk(id);
    }

    async findAll() {
        return await Users.findAll();
    }
}

module.exports = new UserRepository();

