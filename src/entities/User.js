module.exports = class GithubUser {
    constructor(params) {
        this.id = params.id;
        this.username = params.username;
        this.url = params.url
        this.details = params.details;
    }
};