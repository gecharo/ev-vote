<template>
    <div :class="$style.wrapper">
        <div :class="$style.gradient">&nbsp;</div>
        <div :class="$style.waves">&nbsp;</div>
        <div :class="$style.app">
            <app-header />
            <app-container>
                <countries-list :items="countries" @change="handleVoteChange"></countries-list>
            </app-container>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import CountriesList from './components/CountriesList';
import LocalStorage from './data/LocalStorage';

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
