<template>
    <div :class="$style.root">
        <div
            :class="$style.voteCnt"
            v-for="(item, index) in votes"
            :key="index"
        >
            <div :class="$style.vote"><icon @click="handleClick(item)" name="star" :active="item <= vote" /></div>
            <div :class="$style.number"><b>{{ item }}</b></div>
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
            votes: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12]
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

@mixin star($size) {
    flex: 0 0 $size;
    width: $size;
    height: $size;
    font-size: $size - 5;
    line-height: $size;
}

.root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: $base-size-m 0 $base-size-m + $base-size-xs 0;
    padding: $base-size-m + 1 $base-size-m $base-size-m - 1 $base-size-m;
    background-color: rgba(69, 71, 76, 0.5);
    border-radius: 10px;
    @include box-shadow();
}

.number {
    text-align: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
}

.voteCnt {
    text-align: center;
}

.vote {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;

    > i {
        color: #e5e5e5;
    }

    @include star(24px);
}

@media only screen and (min-width: 360px) {
    .vote {
        &:hover {
            border-radius: 50%;
            background-color: #ffdd00;
            > i {
                color: rgb(69, 71, 76);
            }
        }

        @include star(28px);
    }
}

@media only screen and (min-width: 440px) {
    .vote {
        @include star(34px);
    }
}

</style>
