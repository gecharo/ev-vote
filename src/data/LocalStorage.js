import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const { assign } = Object;

const sortByStart = field => (c1, c2) => c1[field] - c2[field];

const countriesData = cData.countries.sort(sortByStart('startPosition'));

export default class LocalStorage {
    constructor(votedCallback) {
        this.votedCallback = votedCallback;

        // BrowserCookies.erase('evvt-counties');
        if (!BrowserCookies.get('evvt-counties')) {
            this.setData(countriesData);
        }
    }
    getData() { // eslint-disable-line
        const cookie = JSON.parse(BrowserCookies.get('evvt-counties'));
        return countriesData.map(country => assign(country, cookie[country.startPosition])).sort(sortByStart('pos'));
    }
    setData(countries) {
        let hasVoted = false;
        const cookie = countries.reduce((o, { startPosition, vote, vId = '' }, index) => {
            o[startPosition] = { vote, vId, pos: index + 1 };
            if (!hasVoted) {
                hasVoted = vote > -1;
            }
            return o;
        }, {});
        this.setVoted(hasVoted);
        BrowserCookies.set('evvt-counties', JSON.stringify(cookie), { expires: 33 });
    }
    reset() { // eslint-disable-line
        return countriesData.map((item) => {
            item.vote = -1;
            delete item.pos;
            return item;
        }).sort(sortByStart('startPosition'));
    }
    setVoted(value) {
        const { voted } = this;
        if (value !== voted) {
            this.voted = value;
            this.votedCallback(this.voted);
        }
    }
}
