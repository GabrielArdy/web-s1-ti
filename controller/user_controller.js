const logger = require('../config/logger');  // Assuming you have a logger utility
const { validationResult } = require('express-validator');
const Service = require('../service/user_service');
const Response = require('../model/response');

class UserController {
    async registerHandler(req, res) {
        logger.info('Starting registration request');
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.warn('Validation failed during registration', { errors: errors.array() });
                return res.status(400).json(Response.badRequest('Invalid input data'));
            }

            const { name, email, password } = req.body;
            const result = await Service.register({ name, email, password });
            logger.info('Registration successful', { email });
            return res.status(201).json(Response.created('User registered successfully', result));
        } catch (error) {
            logger.error('Registration failed', { 
                error: error.message, 
                stack: error.stack 
            });
            if (error.message === 'Email already exists') {
                return res.status(409).json(Response.conflict('Email already exists'));
            }
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async loginHandler(req, res) {
        logger.info('Starting login request');
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.warn('Validation failed during login', { errors: errors.array() });
                return res.status(400).json(Response.badRequest('Invalid input data'));
            }

            const { email, password } = req.body;
            const result = await Service.login({ email, password });
            logger.info('Login successful', { email });
            return res.json(Response.success('Login successful', result));
        } catch (error) {
            logger.error('Login failed', { 
                error: error.message, 
                stack: error.stack 
            });
            if (error.message === 'Email not found') {
                return res.status(404).json(Response.notFound('User not found'));
            }
            if (error.message === 'Password is incorrect') {
                return res.status(401).json(Response.unauthorized('Invalid credentials'));
            }
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }

    async getAllHandler(req, res) {
        logger.info('Fetching all users');
        try {
            const result = await Service.getAll();
            return res.json(Response.success('Users retrieved successfully', result));
        } catch (error) {
            logger.error('Failed to fetch users', { 
                error: error.message, 
                stack: error.stack 
            });
            return res.status(500).json(Response.internalServerError('Internal server error'));
        }
    }
}

module.exports = new UserController();