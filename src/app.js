global.demand = path => require(`${__dirname}/${path}`);

const dependencies = demand('config/dependency-injector');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

dependencies.DatabaseService.initialize()
    .then(() => {
        app
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: false }));
            
        app.listen(port, () => console.log(`http://localhost:${port}`));
    })
    .catch(err => {
        console.log(err);
    })

