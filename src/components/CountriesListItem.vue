<template>
    <li :class="$style.item">
        <div :class="$style.container">
            <b :class="$style.started">{{ item.startPosition }}</b>
            <div :class="$style.positionCnt">
                <position :index="index" :active="voteActive" :semiActive="voted">{{ voted ? index + 1 : '0' }}</position>
            </div>
            <div :class="$style.flagCnt">
                <flag :abbr="item.abbr"/>
            </div>
            <country :class="$style.countryCnt" :item="item" />
            <div :class="$style.iconCnt">
                <icon @click="handleToggle" :active="!voting && voteActive" :name="voting ? 'close' : 'star'" size="lg" />
            </div>
            <div :class="$style.voteCnt">
                <span v-if="!voting && voteActive">{{ item.vote }}</span>
                <icon v-if="voting && voted" :class="$style.trash" name="trash" size="lg" @click="handleDelete" />
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
import Country from './Country';

export default {
    components: {
        Flag,
        Position,
        VoteList,
        Icon,
        Country
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
    flex: 0 0 18px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.31);
}

@media only screen and (max-width: 399px) {
    .started {
        display: none;
    }
}

.positionCnt {
    flex: 0 0 auto;
}

.flagCnt {
    flex: 1 1 auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
}

.countryCnt {
    flex: 5 1 100px;
}

.iconCnt {
    flex: 0 0 28px;
    text-align: center;
    padding-bottom: 1px;
}

.voteCnt {
    flex: 0 0 28px;
    text-align: center;
}

.trash {
    margin-bottom: 4px;
}

</style>
