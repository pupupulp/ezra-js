module.exports = class EntityCreateException {
    
    constructor() {
        return new Error('Entity not created.');
    }
};