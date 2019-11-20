const express = require('express');

const githubApiService =  demand('frameworks/backend/express/routes/github-service');

module.exports = (dependencies) => {
    const router = express.Router();

    const githubApiServiceRouter = githubApiService(dependencies);
    router.use('/github', githubApiServiceRouter);

    return router;
};