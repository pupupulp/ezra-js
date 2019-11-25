module.exports = class EntityReadException {
    
    constructor() {
        return new Error('Entity not found.');
    }
};