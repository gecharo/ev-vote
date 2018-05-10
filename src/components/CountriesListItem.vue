<template>
    <li :class="$style.item">
        <div :class="$style.container">
            <b :class="$style.started">{{ item.startPosition }}</b>
            <position :class="$style.position" :index="index" :active="voteActive" :semiActive="voted">{{ voted ? index + 1 : '0' }}</position>
            <div :class="$style.flag"><flag :abbr="item.abbr"/></div>
            <div :class="$style.nameContainer">
                <div :class="$style.name">{{ item.name }}</div>
                <div :class="$style.artist">{{ `${item.artist} - ${item.song}` }}</div>
            </div>
            <div :class="$style.icon"><icon @click="handleToggle" :active="!voting && voteActive" :name="voting ? 'close' : 'star'" size="lg" /></div>
            <div :class="$style.currentVote">
                <span v-if="!voting && item.vote > 0">{{ item.vote }}</span>
                <icon v-if="voting" name="trash" size="lg" @click="handleDelete" />
            </div>
        </div>
        <vote-list :class="$style.voteList" v-if="voting" @vote="handleVote" :vote="item.vote" />
    </li>
</template>

<script>
import Flag from './Flag';
import Position from './Position';
import VoteList from './VoteList';
import Icon from './Icon';

export default {
    components: {
        Flag,
        Position,
        VoteList,
        Icon
    },
    props: {
        index: Number,
        item: Object
    },
    computed: {
        voted() {
            return this.item.vote >= 0;
        },
        voteActive() {
            return this.item.vote > 0;
        }
    },
    data() {
        return {
            voting: false
        };
    },
    methods: {
        handleToggle() {
            this.voting = !this.voting;
        },
        handleVote(vote) {
            this.voting = false;
            this.$set(this.item, 'vote', vote);

            this.$emit('vote', this.index, this.item);
        },
        handleDelete() {
            this.handleVote(-1);
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
    width: 18px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.28);
}

@media only screen and (max-width: 399px) {
    .started {
        display: none;
    }
}

.position {
    flex: 0 0 auto;
}

.flag {
    flex: 1 1 auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
}

.nameContainer {
    flex: 5 1 100px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
}

.name {
    width: 100%;
    display: inline-block;
    line-height: 19px;
}

.artist {
    width: 100%;
    font-size: 14px;
    color: #B9B9B9;
    opacity: 0.8;
}

.icon {
    flex: 0 0 auto;
    width: 28px;
    text-align: center;
    padding-bottom: 1px;
}

.currentVote {
    flex: 0 0 auto;
    width: 28px;
    text-align: center;
}

</style>
