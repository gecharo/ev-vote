<template>
    <i :class="['fa', 'fa-star', 'fa-lg', $style.root, {[$style.active]: active}]" aria-hidden="true" />
</template>

<script>
export default {
    props: {
        active: Boolean
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
    user-select: none;
    cursor: pointer;

    &.active {
        color: #ffdd00;
    }
}
</style>
