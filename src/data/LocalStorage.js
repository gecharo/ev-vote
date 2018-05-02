import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const defaultCountries = JSON.stringify(cData.countries);

export default class LocalStorage {
    constructor(votedCallback) {
        this.votedCallback = votedCallback;
        const storedCountries = BrowserCookies.get('ev-counties');
        if (!storedCountries) {
            this.setData(cData.countries);
        }
        this.setVoted(!!storedCountries);
    }
    getData() { // eslint-disable-line
        const storedCountries = BrowserCookies.get('ev-counties');
        return JSON.parse(storedCountries || defaultCountries);
    }
    setData(countries) {
        const newCountries = JSON.stringify(countries);
        BrowserCookies.set('ev-counties', newCountries);
        this.setVoted(true);
    }
    reset() {
        BrowserCookies.erase('ev-counties');
        this.setVoted(false);
        return this.getData();
    }
    setVoted(value) {
        const { voted } = this;
        if (value !== voted) {
            this.voted = value;
            this.votedCallback(this.voted);
        }
    }
}
