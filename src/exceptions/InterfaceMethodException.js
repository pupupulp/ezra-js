module.exports = class InterfaceMethodException {
    
    constructor() {
        return new Error('Interface method not implemented');
    }
};