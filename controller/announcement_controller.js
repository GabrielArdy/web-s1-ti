const logger = require('../config/logger');
const { validationResult } = require('express-validator');
const Service = require('../service/announcement_service');
const Response = require('../model/response');

class AnnouncementController {
    async createHandler(req, res) {
        logger.info('Starting create announcement request');
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.warn('Validation failed during announcement creation', { errors: errors.array() });
                return res.status(400).json(Response.badRequest('Invalid input data'));
            }

            const { title, description, content, image } = req.body;
            const author = req.user?.id || 1; // Default author if not provided

            const announcementData = {
                title,
                description,
                content,
                image: image || null,
                author
            };

            const result = await Service.create(announcementData);
            logger.info('Announcement created successfully', { title });
            return res.status(201).json(Response.created('Announcement created successfully', result));
        } catch (error) {
            logger.error('Announcement creation failed', {
                error: error.message,
                stack: error.stack
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async getAllHandler(req, res) {
        logger.info('Fetching all announcements');
        try {
            const result = await Service.findAll();
            return res.json(Response.success('Announcements retrieved successfully', result));
        } catch (error) {
            logger.error('Failed to fetch announcements', {
                error: error.message,
                stack: error.stack
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async getByIdHandler(req, res) {
        const { id } = req.params;
        logger.info('Fetching announcement by ID', { id });
        try {
            const result = await Service.findById(id);
            
            if (!result) {
                return res.status(404).json(Response.notFound('Announcement not found'));
            }
            
            return res.json(Response.success('Announcement retrieved successfully', result));
        } catch (error) {
            logger.error('Failed to fetch announcement', {
                error: error.message,
                stack: error.stack
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async updateHandler(req, res) {
        const { id } = req.params;
        logger.info('Starting update announcement request', { id });
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.warn('Validation failed during announcement update', { errors: errors.array() });
                return res.status(400).json(Response.badRequest('Invalid input data'));
            }

            const { title, description, content, image } = req.body;
            const updateData = {
                title,
                description,
                content,
                image: image || null
            };

            const result = await Service.update(id, updateData);
            if (!result) {
                return res.status(404).json(Response.notFound('Announcement not found'));
            }

            logger.info('Announcement updated successfully', { id });
            return res.json(Response.success('Announcement updated successfully', result));
        } catch (error) {
            logger.error('Announcement update failed', {
                error: error.message,
                stack: error.stack
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async deleteHandler(req, res) {
        const { id } = req.params;
        logger.info('Starting delete announcement request', { id });
        try {
            const result = await Service.delete(id);

            if (!result) {
                return res.status(404).json(Response.notFound('Announcement not found'));
            }

            logger.info('Announcement deleted successfully', { id });
            return res.json(Response.success('Announcement deleted successfully'));
        } catch (error) {
            logger.error('Announcement deletion failed', {
                error: error.message,
                stack: error.stack
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }
}

module.exports = new AnnouncementController();