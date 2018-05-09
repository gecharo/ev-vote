import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const sortByStart = ({ startPosition: p1 }, { startPosition: p2 }) => p1 - p2;

const defaultCountries = JSON.stringify(cData.countries.sort(sortByStart));

export default class LocalStorage {
    constructor(votedCallback) {
        this.votedCallback = votedCallback;
    }
    getData() {
        const storedCountries = BrowserCookies.get('ev-counties');
        this.setVoted(!!storedCountries);
        return JSON.parse(storedCountries || defaultCountries);
    }
    setData(countries) {
        const newCountries = JSON.stringify(countries);
        BrowserCookies.set('ev-counties', newCountries, { expires: 14 });
        this.setVoted(true);
    }
    reset() {
        BrowserCookies.erase('ev-counties');
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
