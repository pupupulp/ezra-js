module.exports = (UserRepository) => {

    async function getByUsername(username) {
        return new Promise((resolve, reject) => {
            UserRepository.getByUsername(username).then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        });
    }

    async function getAll() {
        return new Promise((resolve, reject) => {
            UserRepository.getAll().then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        });
    }

    return {
        getByUsername,
        getAll
    };
};