const { IBackendService } = demand('interfaces');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const config = demand('configs');

const compression = demand('frameworks/backend/express/middlewares/compression');
const minify = demand('frameworks/backend/express/middlewares/minify');
const helmet = demand('frameworks/backend/express/middlewares/helmet');
const cors = demand('frameworks/backend/express/middlewares/cors');
const rateLimit = demand('frameworks/backend/express/middlewares/rate-limit');
const slowDown = demand('frameworks/backend/express/middlewares/slow-down');
const overloadProtection = demand('frameworks/backend/express/middlewares/overload-protection');
const ddosProtection = demand('frameworks/backend/express/middlewares/ddos-protection');
const errorHandler = demand('frameworks/backend/express/middlewares/error-handler');

const logger = demand('frameworks/backend/express/utils/logger');

const routes = demand('frameworks/backend/express/routes');

module.exports = class ExpressService extends IBackendService {

    constructor() {
        super();
        this.app = express();
        this.apiVersion = '/v1';

        this.normalizePort(config.server.port)
    }

    normalizePort(port) {
        const parsedPort = parseInt(port, 10);
        this.port = false;
    
        if (isNaN(parsedPort)) { this.port = port; }
        if (parsedPort >= 0) { this.port = parsedPort; }
    }

    configureApp(dependencies) {
        this.app
            .use(compression())
            .use(minify())
            .use(helmet())
            .options('*', cors())
            .use(cors())
            .use(overloadProtection())
            .use(ddosProtection());

        this.app
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: false }));

        this.app
            .use(rateLimit())
            .use(slowDown())
            .use(this.apiVersion, routes(dependencies));

        this.app
            .use(errorHandler());
    }

    initialize(dependencies) {
        return new Promise((resolve, reject) => {
            try {
                this.configureApp(dependencies);

                const server = http.createServer(this.app);
                server.listen(this.port);

                server.on('error', (error) => {
                    if (error.syscall !== 'listen') { throw error; }
                
                    switch (error.code) {
                    case 'EACCES':
                        logger.error('Port ' + port + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        logger.error('Port ' + port + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                    }
                });
                
                server.on('listening', () => {
                    const address = server.address();
                    logger.info('Listening on port ' + address.port);
                });

                resolve(server);
            } catch (err) {
                reject(err);
            }
        });
        
    }
}


