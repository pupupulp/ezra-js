const { IDatabaseService } = demand('interfaces');

module.exports = class MongoDbService extends IDatabaseService {

    constructor() {
        super();
    }

    initialize() {
        return new Promise((resolve, reject) => {
            try {
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }
};