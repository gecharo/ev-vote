<template>
    <span :class="[$style.position, {[$style.active]: active}]"><span><slot></slot></span></span>
</template>

<script>
export default {
    props: {
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
        background-color: #20293b;
        color: white;
        letter-spacing: -2px;

        & > span {
            opacity: 0.5;
            margin-right: 3px;
        }

        &.active {
            & > span {
                opacity: 1;
            }
            background-color: #00aa44;
        }
    }
</style>
