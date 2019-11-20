const logger = demand('frameworks/backend/express/utils/logger');

module.exports = () => {
    return (err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    
        res.status(err.status || 500);
        res.json({ error: err.message });
    };
};