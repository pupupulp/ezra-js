global.demand = path => require(`${__dirname}/${path}`);

const dependencies = demand('configs/dependency-injector');

dependencies.DatabaseService.initialize(dependencies)
    .then(() => {
        dependencies.ApplicationService.initialize(dependencies)
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err);
    })

