const { InterfaceMethodException } = demand('exceptions');

module.exports = class IDatabaseService {

    constructor() {
        // 
    }

    initialize() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }
}