module.exports = class User {
    constructor(params) {
        this.id = params.id;
        this.username = params.username;
        this.url = params.url
        this.details = params.details;
    }
};