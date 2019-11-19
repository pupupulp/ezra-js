const { InterfaceMethodException } = demand('exceptions');

module.exports = class IDatabaseService {

    constructor() {}

    info() {
        return new InterfaceMethodException();
    }

    error() {
        return new InterfaceMethodException();
    }

    warn() {
        return new InterfaceMethodException();
    }
}