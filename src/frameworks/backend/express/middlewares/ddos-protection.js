const Ddos = require('ddos');
const logger = demand('frameworks/backend/express/utils/logger');

module.exports = () => {
    return  new Ddos({
        limit: 100,
        maxcount: 50,
        burst: 100,
        maxexpiry: 60,
        whitelists: [
            // '*'
        ],
        onDenial: function (req) {
            logger.info('Denied ' + req.method + ' request from ' + req.ip + ' due to possible DOS attack');
        }
    }).express;
};