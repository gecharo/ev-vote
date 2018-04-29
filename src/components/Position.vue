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
        background-color: #495166;
        color: white;
        letter-spacing: -2px;
        opacity: 0.5;

        & > span {
            margin-right: 3px;
            margin-top: 2px;
        }

        &.active {
            opacity: 1;
            background-color: #00aa44;
        }
    }
</style>
