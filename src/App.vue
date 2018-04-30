<template>
    <div :class="$style.app">
        <app-header />
        <app-container>
            <countries-list :items="countries"></countries-list>
        </app-container>
    </div>
</template>

<script>
import BrowserCookies from 'browser-cookies';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import CountriesList from './components/CountriesList';
import cData from './data/countries.json';

export default {
    components: {
        AppHeader,
        AppContainer,
        CountriesList
    },
    data() {
        return {
            countries: BrowserCookies.get('countries') ? JSON.parse(BrowserCookies.get('countries')) : cData.countries
        };
    },
    watch: {
        countries(countries) {
            BrowserCookies.set('countries', JSON.stringify(countries));
        }
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oxygen');

body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #1c212e;
    background-image: url("images/bg.gif");
    color: #e5e5e5;
    display: flex;
    justify-content: center;

    font-family: "Oxygen", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-width: 320px;
}
</style>

<style lang="scss" module>
.app {
    flex: 1 1 auto;
    max-width: 640px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
