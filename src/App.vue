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
    name: 'app',
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

<style lang="scss" module>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: #e5e5e5;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
