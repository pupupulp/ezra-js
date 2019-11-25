const { IUserRepository } = demand('interfaces');
const { EntityCreateException, EntityReadException } = demand('exceptions');

module.exports = class GithubUserRepository extends IUserRepository {

    constructor() {
        super();
        this.users = [];
    }

    add(userInstance) {
        return new Promise((resolve, reject) => {
            try {
                this.users.push(userInstance);
                resolve(userInstance);
            } catch (error) {
                reject(new EntityCreateException());
            }
        });
    }

    getByUsername(username) {
        return new Promise((resolve, reject) => {
            try {
                const user = this.users.find(u => u.username === username);
                resolve(user);
            } catch (err) {
                reject(new EntityReadException());
            }
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }
}

