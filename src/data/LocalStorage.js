import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const pinHistory = [];
const PIN = '339';

const getCountries = () => cData.countries.map(item => Object.assign({}, item));

export default {
    getData() {
        const storedCountries = BrowserCookies.get('ev-counties');
        return storedCountries ? JSON.parse(storedCountries) : getCountries();
    },
    setData(countries) {
        BrowserCookies.set('ev-counties', JSON.stringify(countries));
    },
    reset() {
        BrowserCookies.erase('ev-counties');
        return this.getData();
    },
    checkPin(item) {
        pinHistory.push(Object.assign({}, item));
        if (pinHistory.length < PIN.length) {
            return false;
        }

        let found = true;
        let i = 0;
        while (found && i < PIN.length) {
            const char = Number(PIN.charAt(i));
            found = char === pinHistory[i].id && char === pinHistory[i].vote;
            i += 1;
        }

        if (found) {
            pinHistory.splice(0, PIN.length);
        } else {
            pinHistory.shift();
        }

        return found;
    }
};
