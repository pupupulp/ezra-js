const express = require('express');
const httpLogger = demand('frameworks/backend/express/utils/http-logger');
const UserController = demand('controllers/user-controller');

module.exports = (dependencies) => {
    const router = express.Router();
    const controller = UserController(dependencies);

    router.use(httpLogger.initializeFileStream());
    router.use(httpLogger.initializeConsoleStream());

    router.route('/users')
        .get(controller.getAllUser);

    router.route('/users/:username')
        .get(controller.getUser);

    return router;
};