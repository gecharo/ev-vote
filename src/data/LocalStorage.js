import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const getCountries = () => cData.countries.map(item => Object.assign({}, item));
let voted = false;

export default {
    getData() {
        const storedCountries = BrowserCookies.get('ev-counties');
        voted = !!storedCountries;
        return storedCountries ? JSON.parse(storedCountries) : getCountries();
    },
    setData(countries) {
        BrowserCookies.set('ev-counties', JSON.stringify(countries));
    },
    reset() {
        BrowserCookies.erase('ev-counties');
        return this.getData();
    },
    getVoted() {
        return voted;
    }
};
