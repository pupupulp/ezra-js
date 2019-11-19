const DatabaseService = demand('frameworks/databases/mongodb/MongoDbService');

module.exports = (() => {
    return {
        DatabaseService: new DatabaseService()
    };
})();