<template>
    <div :class="$style.app">
        <app-header :class="$style.header" />
        <app-container :class="$style.container">
            <countries-list :items="countries" @change="handleVoteChange"></countries-list>
        </app-container>
    </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import CountriesList from './CountriesList';
import LocalStorage from './../data/LocalStorage';

export default {
    components: {
        AppHeader,
        AppContainer,
        CountriesList
    },
    data() {
        return {
            countries: LocalStorage.getData()
        };
    },
    methods: {
        handleVoteChange(item, items) {
            if (LocalStorage.checkPin(item)) {
                this.$data.countries = LocalStorage.reset();
            } else {
                LocalStorage.setData(items);
            }
        }
    }
};
</script>

<style lang="scss" module>
.app {
    width: 100%;
    max-width: 640px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {
    width: 100%;
}
.container {
    width: 100%;
}
</style>
