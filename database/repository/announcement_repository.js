const Announcement = require('../schema/announcement');

class AnnouncementRepository {
    async create(data) {
        return await Announcement.create(data);
    }

    async findById(id) {
        return await Announcement.findByPk(id);
    }

    async findAll() {
        return await Announcement.findAll();
    }

    async update(id, data) {
        return await Announcement.update(data, { where: { id } });
    }

    async delete(id) {
        return await Announcement.destroy({ where: { id } });
    }

    async findByAuthor(author) {
        return await Announcement.findAll({ where: { author } });
    }
}

module.exports = new AnnouncementRepository();

