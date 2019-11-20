const DatabaseService = demand('frameworks/databases/github/GithubService');
const ApplicationService = demand('frameworks/backend/express/ExpressService');
const ApiAdapterService = demand('frameworks/tools/ApiAdapterService');

module.exports = (() => {
    return {
        DatabaseService: new DatabaseService(),
        ApplicationService: new ApplicationService(),
        ApiAdapterService: new ApiAdapterService(),
    };
})();