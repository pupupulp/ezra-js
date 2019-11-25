const { InterfaceMethodException } = demand('exceptions');

module.exports = class IUserRepository {

    constructor() {}

    add() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }

    getByUsername() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            reject(new InterfaceMethodException())
        });
    }
}