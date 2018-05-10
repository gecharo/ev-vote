<template>
    <div :class="$style.root">
        <div :class="$style.row">
            <div
                :class="$style.vote"
                v-for="(item, index) in votes"
                :key="index"
            >
                <icon @click="handleClick(item)" name="star" :active="item <= vote" />
            </div>
        </div>
        <div :class="$style.row">
            <div
                :class="$style.number"
                v-for="(item, index) in votes"
                :key="index"
            >
                <b>{{ item }}</b>
            </div>
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

@mixin size($size) {
    flex: 0 0 $size;
}

@mixin star($size) {
    @include size($size);
    width: $size;
    height: $size;
    font-size: $size - 5;
    line-height: $size;
}

.root {
    display: block;
    margin: $base-size-m 0 $base-size-m + $base-size-xs 0;
    padding: $base-size-m + 1 $base-size-m $base-size-m - 1 $base-size-m;
    background-color: rgba(69, 71, 76, 0.5);
    border-radius: 10px;
    @include box-shadow();

    > *:not(:last-child) {
        margin-bottom: $base-size-xs    ;
    }
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.number {
    @include size(24px);
    text-align: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
}

.vote {
    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    cursor: pointer;

    > i {
        color: #e5e5e5;
    }

    @include star(24px);
}

@media only screen and (min-width: 360px) {
    .number {
        @include size(28px);
    }

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
    .number {
        @include size(34px);
    }

    .vote {
        @include star(34px);
    }
}

</style>
