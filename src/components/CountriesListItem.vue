<template>
    <li :class="$style.item">
        <div :class="$style.container">
            <span :class="$style.started">{{ item.id }}</span>
            <position :index="index" :active="voted" />
            <flag :abbr="item.abbr" />
            <span :class="$style.name">{{ item.name }}</span>
            <star @click.native="showVote" :active="voted" />
            <span :class="$style.currentVote" v-if="voted">{{ item.vote }}</span>
        </div>
        <vote-list :class="$style.voteList" v-if="voteVisible" @vote="handleVote" />
    </li>
</template>

<script>
import Flag from './Flag';
import Position from './Position';
import VoteList from './VoteList';
import Star from './Star';

export default {
    components: {
        Flag,
        Position,
        VoteList,
        Star
    },
    computed: {
        voted() {
            return this.item.vote !== 0;
        }
    },
    props: {
        index: Number,
        item: Object
    },
    data() {
        return {
            voteVisible: false
        };
    },
    methods: {
        showVote() {
            this.voteVisible = !this.voteVisible;
        },
        handleVote(vote) {
            this.$set(this.item, 'vote', vote);
            this.voteVisible = false;

            this.$emit('vote', this.index, this.item);
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.item {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 22px;
}

.container {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    > *:not(:last-child) {
        margin-right: $base-size-m;
    }
}

.started {
    flex: 0 0 auto;
    width: 22px;
    font-size: 14px;
    text-align: center;
    color: #626777;
    padding-right: 6px;
}

.name {
    flex: 1 1 auto;
    text-align: center;
    white-space: normal;
    font-size: 21px;
}

.test {
    color: red;
}

.currentVote {
    flex: 0 0 auto;
    width: 28px;
    text-align: center;
}

.voteList {
    padding-left: 28px + $base-size-m;
}
</style>
