export default class LookupsService {
    constructor($http) {
        this.http = $http;
    }

    getLookups() {
        return this.http.get(`${process.env.API_URL}/lookups`).then(response => {
            return response.data;
        });
    }
}

LookupsService.$inject = ["$http"];