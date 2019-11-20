const overloadProtection = require('overload-protection');

module.exports = () => {
    return overloadProtection('express', {
        production: process.env.NODE_ENV === 'production',
        clientRetrySecs: 1,
        sampleInterval: 5,
        maxEventLoopDelay: 42,
        maxHeapUsedBytes: 0,
        maxRssBytes: 0,
        errorPropagationMode: false
    });
};