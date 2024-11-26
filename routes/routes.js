const router = require('express').Router();
const logger = require('../config/logger');
const AnnouncementService = require('../service/announcement_service');

router.get('/pengumuman', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 9; // Items per page

        const { announcements, total, totalPages } = await AnnouncementService.findAllPaginated(page, limit);
        
        logger.info('Successfully fetched announcements with pagination');
        
        res.render('pages/announcement', { 
            announcements,
            title: 'Pengumuman - FTI UKSW',
            page: page,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        });
    } catch (error) {
        logger.error('Failed to render announcements page', { error });
        console.error(error);
        res.status(500).render('error', { 
            title: 'Error - FTI UKSW',
            message: 'Gagal memuat pengumuman. Silakan coba lagi nanti.'
        });
    }
});

module.exports = router;