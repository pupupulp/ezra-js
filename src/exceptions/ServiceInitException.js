module.exports = class ServiceInitException {
    
    constructor() {
        return new Error('Service initialization failed.');
    }
};