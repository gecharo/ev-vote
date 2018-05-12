import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const { assign } = Object;

const sortByStart = field => (c1, c2) => c1[field] - c2[field];

const hasVoted = cookies => cookies.some(({ vote }) => vote > -1);

const countriesDataDefault = JSON.stringify(cData.countries.sort(sortByStart('startPosition')));

export default class LocalStorage {
    constructor(votedCallback) {
        this.votedCallback = votedCallback;
        this.countriesData = JSON.parse(countriesDataDefault);

        const cookieString = BrowserCookies.get('evvt-counties');
        if (!cookieString) {
            this.updateCookie(this.countriesData);
        } else {
            this.setVoted(hasVoted(this.getCountries()));
        }
    }
    updateCookie() {
        this.setVoted(hasVoted(this.countriesData));

        const cookieData = this.countriesData.reduce((o, { startPosition, vote, vId = '' }, index) => {
            o[startPosition] = { vote, vId, pos: index + 1 };
            return o;
        }, {});
        BrowserCookies.set('evvt-counties', JSON.stringify(cookieData), { expires: 33 });
    }
    getCountries() {
        const cookie = JSON.parse(BrowserCookies.get('evvt-counties'));
        return this.countriesData.map(country => assign(country, cookie[country.startPosition])).sort(sortByStart('pos'));
    }
    resetCountries() {
        BrowserCookies.erase('evvt-counties');
        this.countriesData = JSON.parse(countriesDataDefault);
        this.updateCookie(this.countriesData);
        return this.countriesData;
    }
    setVoted(value) {
        const { voted } = this;
        if (value !== voted) {
            this.voted = value;
            this.votedCallback(this.voted);
        }
    }
}
