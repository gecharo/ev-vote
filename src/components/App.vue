<template>
    <div :class="$style.app">
        <app-header :class="$style.fit" />
        <app-container :class="$style.fit">
            <countries-list :items="countries" @voteChange="handleVoteChange" @openVideo="handleOpenVideo"></countries-list>
        </app-container>
        <app-footer :class="$style.fit" @reset="handleReset" :active="voted"/>
        <player :class="$style.videoCnt" v-if="opened && vId" :vId="vId" :handleClose="handleCloseVideo" />
    </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppFooter from './AppFooter';
import Player from './Player';
import CountriesList from './CountriesList';
import LocalStorage from './../data/LocalStorage';

export default {
    components: {
        AppHeader,
        AppContainer,
        AppFooter,
        Player,
        CountriesList
    },
    created() {
        this.localStorage = new LocalStorage(this.handleVotedChange);

        this.countries = this.localStorage.getData();
    },
    data() {
        return {
            countries: undefined,
            voted: false,
            vId: undefined,
            opened: false
        };
    },
    methods: {
        toggleVideo(val) {
            this.opened = val;
            document.body.style.overflow = val ? 'hidden' : 'auto';
        },
        handleOpenVideo(vId) {
            this.vId = vId;
            this.toggleVideo(true);
        },
        handleCloseVideo() {
            this.toggleVideo(false);
        },
        handleVoteChange(items) {
            this.localStorage.setData(items);
        },
        handleReset() {
            this.localStorage.setData(this.localStorage.reset());
        },
        handleVotedChange(voted) {
            this.voted = voted;
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
.videoCnt {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>
