const { IApiAdapterService } = demand('interfaces');
const axios = require('axios');

module.exports = class ApiAdapter extends IApiAdapterService {
    
    constructor() {
        super();
    }

    initialize(url) {
        return axios.create({ baseURL: url });
    }
};