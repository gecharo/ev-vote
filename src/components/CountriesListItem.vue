<template>
    <li :class="$style.item">
        <div :class="$style.container">
            <span :class="$style.started">{{ item.id }}</span>
            <position :class="$style.position" :index="index" :active="voteActive">{{ voted ? index + 1 : '0' }}</position>
            <flag :class="$style.flag" :abbr="item.abbr"/>
            <div :class="$style.nameContainer">
                <div :class="$style.name">{{ item.name }}</div>
                <div :class="$style.artist">{{ `${item.artist} - ${item.song}` }}</div>
            </div>
            <div :class="$style.icon"><icon @click="handleIconClick" :active="voteActive" :name="voteVisible && voteActive ? 'trash' : 'star'" size="lg" /></div>
            <span :class="[$style.currentVote, {[$style.currentVoteVisible]: voteActive} ]">{{ item.vote }}</span>
        </div>
        <vote-list :class="$style.voteList" v-if="voteVisible" @vote="handleVote" :vote="item.vote" />
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
            voteVisible: false
        };
    },
    methods: {
        handleIconClick() {
            if (this.voteVisible && this.item.vote >= 0) {
                this.handleVote(-1);
            } else {
                this.voteVisible = !this.voteVisible;
            }
        },
        handleVote(vote) {
            this.voteVisible = false;
            this.$set(this.item, 'vote', vote);

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
    width: 18px;
    font-size: 14px;
    text-align: center;
    color: #626568;
}

.position {
    flex: 0 0 auto;
}

.flag {
    flex: 3 1 auto;
    text-align: right;
}

@media only screen and (max-width: 359px) {
    .flag {
        display: none;
    }
}

.nameContainer {
    flex: 9 1 100px;
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
    color: #BBBBBB;
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
    visibility: hidden;

    &.currentVoteVisible {
        visibility: visible;
    }
}

</style>
