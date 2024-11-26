const router = require('express').Router();
const logger = require('../config/logger');
const Service = require('../service/announcement_service');

router.get('/pengumuman', async (req, res) => {
    try {
        const announcements = await Service.findAll();
        logger.info('Successfully fetched announcements');
        
        res.render('pages/announcement', { 
            announcements,
            title: 'Pengumuman - FTI UKSW'
        });
    } catch (error) {
        logger.error('Failed to render announcements page', { error });
        res.status(500).render('error', { 
            title: 'Error - FTI UKSW',
            message: 'Gagal memuat pengumuman. Silakan coba lagi nanti.'
        });
    }
});

module.exports = router;