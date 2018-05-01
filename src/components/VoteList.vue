<template>
    <div :class="$style.root">
        <div
            :class="$style.vote"
            v-for="(item, index) in votes"
            :key="index"
        >
            <icon @click.native="handleClick(item)" :class="$style.item" icon="star" :active="item <= vote" />
        </div>
    </div>
</template>

<script>
import Icon from './Icon';

export default {
    components: {
        Icon
    },
    props: {
        vote: Number
    },
    data() {
        return {
            votes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
        };
    },
    methods: {
        handleClick(vote) {
            this.$emit('vote', vote);
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";
@import './../scss/shadow.scss';

.root {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: $base-size-m 0;
    justify-content: space-between;
    padding: $base-size-s + 1 $base-size-m $base-size-s $base-size-m;
    background-color: rgba(69, 71, 76, 0.5);
    border-radius: 10px;
    @include box-shadow();
}

.vote {
    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    cursor: pointer;

    flex: 0 0 32px;
    width: 32px;
    height: 32px;

    > i {
        color: #e5e5e5;
    }
}

@media only screen and (min-width: 320px) {
    .vote {
        flex: 0 0 20px;
        width: 20px;
        height: 20px;
        font-size: 19px;
    }
}

@media only screen and (min-width: 360px) {
    .vote {
        &:hover {
            border-radius: 50%;
            background-color: #ffdd00;
            > i {
                color: #1c212e;
            }
        }

        flex: 0 0 24px;
        width: 24px;
        height: 24px;
        font-size: 20px;
    }
}

@media only screen and (min-width: 420px) {
    .vote {
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
        font-size: 28px;
    }
}

</style>
