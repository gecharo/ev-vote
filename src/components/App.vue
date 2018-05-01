<template>
    <div :class="$style.app">
        <app-header :class="$style.fit" />
        <app-container :class="$style.fit">
            <countries-list :items="countries" @change="handleVoteChange"></countries-list>
        </app-container>
        <app-footer :class="$style.fit" @reset="handleReset" :active="voted"/>
    </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppFooter from './AppFooter';
import CountriesList from './CountriesList';
import LocalStorage from './../data/LocalStorage';

export default {
    components: {
        AppHeader,
        AppContainer,
        AppFooter,
        CountriesList
    },
    data() {
        return {
            countries: LocalStorage.getData(),
            voted: LocalStorage.getVoted()
        };
    },
    methods: {
        handleVoteChange(item, items) {
            if (!this.voted) {
                this.voted = true;
            }
            LocalStorage.setData(items);
        },
        handleReset() {
            this.voted = false;
            this.$data.countries = LocalStorage.reset();
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.app {
    width: 100%;
    max-width: 640px;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    padding: 0 $base-size-m;
}
.fit {
    width: 100%;
}
</style>
