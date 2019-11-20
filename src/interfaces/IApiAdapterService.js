const { InterfaceMethodException } = demand('exceptions');

module.exports = class IApiAdapterService {

    constructor() {}

    initialize() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }
}