import BrowserCookies from 'browser-cookies';
import cData from './countries.json';

const { assign } = Object;

const sortByStart = field => (c1, c2) => c1[field] - c2[field];

const hasVoted = cookies => cookies.some(({ vote }) => vote > -1);

export default class LocalStorage {
    constructor(votedCallback) {
        this.votedCallback = votedCallback;
        this.countriesData = cData.countries.sort(sortByStart('startPosition'));

        const cookieString = BrowserCookies.get('evvt-counties');
        if (!cookieString) {
            this.setData(this.countriesData);
        } else {
            this.setVoted(hasVoted(this.getData()));
        }
    }
    getData() {
        const cookie = JSON.parse(BrowserCookies.get('evvt-counties'));
        return this.countriesData.map(country => assign(country, cookie[country.startPosition])).sort(sortByStart('pos'));
    }
    setData(countries) {
        this.setVoted(hasVoted(countries));

        const cookieData = countries.reduce((o, { startPosition, vote, vId = '' }, index) => {
            o[startPosition] = { vote, vId, pos: index + 1 };
            return o;
        }, {});
        BrowserCookies.set('evvt-counties', JSON.stringify(cookieData), { expires: 33 });
    }
    reset() {
        const countries = this.countriesData.map(item => assign(item, { vote: -1, pos: item.startPosition })).sort(sortByStart('startPosition'));
        this.setData(countries);
        return countries;
    }
    setVoted(value) {
        const { voted } = this;
        if (value !== voted) {
            this.voted = value;
            this.votedCallback(this.voted);
        }
    }
}
