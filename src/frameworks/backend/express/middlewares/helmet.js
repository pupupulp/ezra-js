const helmet = require('helmet');

module.exports = () => {
    /**
     * * X-Permitted-Cross-Domain-Policies
     *
     * * restricts clients like Flash and Acrobat
     * * from what data to load from our domain
     *
     * * defaults to none
     */
    helmet.permittedCrossDomainPolicies();

    /**
     * * X-Powered-By
     *
     * * removes or changes the X-Powered-By header
     * * to avoid exploitation of known vulnerabilities
     * * on whatever technology you are using
     */
    helmet.hidePoweredBy({ setTo: 'PHP 7.3.0' });

    /**
     * * Strict-Transport-Security
     *
     * * keeps users on HTTPS or tells browsers to stick with HTTPS
     * * it helps to mitigate man-in-the-middle attacks
     */
    helmet.hsts({ maxAge: 3600 * 24 * 30 });

    /**
     * * Referrer-Policy
     *
     * * sets the value of Referer
     * * it tells a server where a request is coming from
     */
    helmet.referrerPolicy({ policy: 'same-origin' });

    /**
     * * X-XSS-Protection
     *
     * * prevents reflected XSS attacks
     *
     * * defaults to 1; mode=block
     */
    helmet.xssFilter();

    return helmet();
};