const { IUserRepository } = demand('interfaces');

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
                reject(new Error('Error Occurred'));
            }
        });
    }

    getByUsername(username) {
        return new Promise((resolve, reject) => {
            try {
                const user = this.users.find(u => u.username === username);
                resolve(user);
            } catch (err) {
                reject(new Error('Error Occurred'));
            }
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }
}

