<template>
    <div :class="$style.wrapper">
        <div :class="$style.gradient">&nbsp;</div>
        <div :class="$style.waves">&nbsp;</div>
        <div :class="$style.app">
            <app-header />
            <app-container>
                <countries-list :items="countries"></countries-list>
            </app-container>
        </div>
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
    background-image: url("images/pattern.gif");
    color: #efefef;

    font-family: "Oxygen", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 320px;
}

.gradient {
    position: absolute;
    z-index: -1;
    background-image: url("images/gradient.png");
    background-repeat: repeat-x;
    background-position: center;
    width: 100%;
    height: 342px;
}

.waves {
    position: absolute;
    z-index: -1;
    background-image: url("images/waves.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 270px;
}

.app {
    width: 100%;
    max-width: 640px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
