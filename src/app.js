global.demand = path => require(`${__dirname}/${path}`);

const dependencies = demand('config/dependency-injector');

dependencies.DatabaseService.initialize()
    .then(() => {
        dependencies.BackendService.initialize(dependencies)
            .catch(err => {
                dependencies.LoggerService.error(err);
            });
    })
    .catch(err => {
        dependencies.LoggerService.error(err);
    })

