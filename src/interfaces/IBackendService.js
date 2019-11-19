const { InterfaceMethodException } = demand('exceptions');

module.exports = class IBackendService {

    constructor() {}

    initialize() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }
}