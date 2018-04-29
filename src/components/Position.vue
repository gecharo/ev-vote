<template>
    <span :class="[$style.position, {[$style.active]: active}]"><span>{{ index + 1 }}</span></span>
</template>

<script>
export default {
    props: {
        index: Number,
        active: Boolean
    }
};
</script>

<style lang="scss" module>
    .position {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #888888;
        color: white;
        letter-spacing: -2px;

        & > span {
            margin-right: 3px;
            margin-top: 2px;
        }

        &.active {
            background-color: #00aa44;
        }
    }
</style>
