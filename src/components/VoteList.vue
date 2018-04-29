<template>
    <div :class="$style.root">
        <div :class="$style.vote" v-for="(item, index) in votes" :key="index">
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

.root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: $base-size-m;
}

.vote {
    flex: 0 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e5e5e5;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
    margin: 3px;

    &:hover {
        background-color: #ffdd00;
        color: #1c212e;
    }
}

</style>
