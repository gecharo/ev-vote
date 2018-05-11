<template>
    <div :class="$style.app">
        <app-header :class="$style.fit" />
        <app-container :class="$style.fit">
            <countries-list :items="countries"></countries-list>
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
    created() {
        this.localStorage = new LocalStorage(this.handleVotedChange);

        this.countries = this.localStorage.getData();
    },
    data() {
        return {
            countries: undefined,
            voted: false
        };
    },
    methods: {
        handleVoteChange(item, items) {
            this.localStorage.setData(items);
        },
        handleReset() {
            this.$data.countries = this.localStorage.reset();
        },
        handleVotedChange(voted) {
            this.voted = voted;
        }
    },
    watch: {
        countries(items) {
            // watch for changes in voting, also when videoId is fetched!
            this.localStorage.setData(items);
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
