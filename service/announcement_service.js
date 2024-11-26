const AnnouncementRepository = require('../database/repository/announcement_repository');
const logger = require('../config/logger');

class AnnouncementService {
    async create(data) {
        try {
            logger.info('Creating new announcement', { title: data.title });
            const result = await AnnouncementRepository.create(data);
            logger.info('Announcement created successfully', { id: result.id });
            return result;
        } catch (error) {
            logger.error('Failed to create announcement', { error: error.message });
            throw error;
        }
    }

    async findById(id) {
        try {
            logger.info('Finding announcement by ID', { id });
            const result = await AnnouncementRepository.findById(id);
            if (!result) {
                logger.warn('Announcement not found', { id });
            }
            return result;
        } catch (error) {
            logger.error('Failed to find announcement', { id, error: error.message });
            throw error;
        }
    }

    async findAll() {
        try {
            logger.info('Fetching all announcements');
            const result = await AnnouncementRepository.findAll();
            logger.info('Successfully retrieved announcements', { count: result.length });
            return result;
        } catch (error) {
            logger.error('Failed to fetch announcements');
            console.error(error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            logger.info('Updating announcement', { id });
            const result = await AnnouncementRepository.update(id, data);
            logger.info('Announcement updated successfully', { id });
            return result;
        } catch (error) {
            logger.error('Failed to update announcement', { id, error: error.message });
            throw error;
        }
    }

    async delete(id) {
        try {
            logger.info('Deleting announcement', { id });
            const result = await AnnouncementRepository.delete(id);
            logger.info('Announcement deleted successfully', { id });
            return result;
        } catch (error) {
            logger.error('Failed to delete announcement', { id, error: error.message });
            throw error;
        }
    }

    async findByAuthor(author) {
        try {
            logger.info('Finding announcements by author', { author });
            const result = await AnnouncementRepository.findByAuthor(author);
            logger.info('Successfully retrieved author announcements', { 
                author, 
                count: result.length 
            });
            return result;
        } catch (error) {
            logger.error('Failed to find announcements by author', { 
                author, 
                error: error.message 
            });
            throw error;
        }
    }
}

module.exports = new AnnouncementService();