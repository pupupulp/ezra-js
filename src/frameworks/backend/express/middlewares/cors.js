const cors = require('cors');

module.exports = () => {
    /**
     * * Access-Control-*
     *
     * * allows restricted resources to be requested from another domain
     *
     * * add cors to options for pre-flight request
     *
     * * defaults to
     * * origin: *
     * * methods: GET, HEAD, PUT, PATCH, POST, DELETE
     * * preflightContinue: false
     * * optionSuccessStatus: 204
     */
    return cors();
};