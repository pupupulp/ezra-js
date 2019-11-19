const { IBackendService } = demand('interfaces');
const express = require('express');
const bodyParser = require('body-parser');
const server = express();

module.exports = class ExpressService extends IBackendService {

    constructor() {
        super();
        this.port = process.env.PORT || 3000;
    }

    initialize() {
        return new Promise((resolve, reject) => {
            try {
                server
                    .use(bodyParser.json())
                    .use(bodyParser.urlencoded({ extended: false }));
                    
                server.listen(this.port, () => console.log(`http://localhost:${this.port}`));

                resolve(server);
            } catch (err) {
                reject(err);
            }
        });
        
    }
}