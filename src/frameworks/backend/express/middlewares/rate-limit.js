const rateLimit = require('express-rate-limit');
const logger = demand('frameworks/backend/express/utils/logger');

module.exports = (dependecies) => {
    return rateLimit({
        max: 100,
        windowMs: 1 * 60 * 1000,
        onLimitReached: (req, res, options) => {
            const limit = req.rateLimit.limit,
                current = req.rateLimit.current,
                remaining = req.rateLimit.remaining;
                
            logger.info('Denied ' + req.method + ' request from ' + req.ip + ' due rate limit reached');
            logger.info(`${req.ip} rate limit: ${limit}, current: ${current}, remaining: ${remaining}`);
        }
    });
};