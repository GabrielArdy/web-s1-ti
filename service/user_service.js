const UserRepository = require('../database/repository/user_repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');

class UserService {
    async register(data) {
        logger.info('Starting user registration process', { email: data.email });
        try {
            const user = await UserRepository.findByEmail(data.email);
            if (user) {
                logger.warn('Registration failed: Email already exists', { email: data.email });
                throw new Error('Email already exists');
            }
            data.password = bcrypt.hashSync(data.password, 10);
            const newUser = await UserRepository.create(data);
            logger.info('User registered successfully', { userId: newUser.id, email: newUser.email });
            return newUser;
        } catch (error) {
            logger.error('Error in user registration', { 
                error: error.message,
                email: data.email,
                stack: error.stack 
            });
            throw error;
        }
    }

    async login(data) {
        logger.info('Starting login attempt', { email: data.email });
        try {
            const user = await UserRepository.findByEmail(data.email);
            if (!user) {
                logger.warn('Login failed: Email not found', { email: data.email });
                throw new Error('Email not found');
            }
            const match = bcrypt.compareSync(data.password, user.password);
            if (!match) {
                logger.warn('Login failed: Incorrect password', { email: data.email });
                throw new Error('Password is incorrect');
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            logger.info('User logged in successfully', { userId: user.id, email: user.email });
            return { user, token };
        } catch (error) {
            logger.error('Error in user login', { 
                error: error.message,
                email: data.email,
                stack: error.stack 
            });
            throw error;
        }
    }
}

module.exports = new UserService();
