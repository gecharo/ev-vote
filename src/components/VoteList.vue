<template>
    <div :class="$style.root">
        <div :class="$style.votes" @click="handleClick" v-for="(item, index) in votes" :key="index">
            <span :data-vote="item">{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            votes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
        };
    },
    methods: {
        handleClick(event) {
            const vote = Number(event.currentTarget.children[0].innerHTML);
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
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: $base-size-s 0;
    display: flex;
}

.votes {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 50px;
    height: 50px;
    background-color: #202020;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
    margin: $base-size-xs;

    &:hover {
        background-color: #444444;
    }
}
</style>
