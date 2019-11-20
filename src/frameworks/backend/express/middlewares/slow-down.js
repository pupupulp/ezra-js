const slowDown = require('express-slow-down');

module.exports = () => {
    return slowDown({
        windowMs: 15 * 60 * 1000,
        delayAfter: 50,
        delayMs: 100
    });
};