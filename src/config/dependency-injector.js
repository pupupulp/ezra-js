const DatabaseService = demand('frameworks/databases/mongodb/MongoDbService');
const BackendService = demand('frameworks/backend/express/ExpressService');
const LoggerService = demand('frameworks/loggers/Winston');

module.exports = (() => {
    return {
        DatabaseService: new DatabaseService(),
        BackendService: new BackendService(),
        LoggerService: new LoggerService(),
    };
})();