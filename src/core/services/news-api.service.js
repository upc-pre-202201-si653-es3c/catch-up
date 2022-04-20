import axios from "axios";
import {LogoApiService} from "./logo-api.service";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2/'
});

export class NewsApiService {
    apiKey = 'fecf4feeffa64e4da682e7d268612ce5';
    logoApi = new LogoApiService();

    getSources() {
        return http.get(`top-headlines/sources?language=en&apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }

}

