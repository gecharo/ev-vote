<template>
    <i :class="['fa', `fa-${icon}`, `fa-${size}`, $style.root, {[$style.active]: active}]" aria-hidden="true" />
</template>

<script>
export default {
    props: {
        active: Boolean,
        size: String,
        icon: String
    }
};
</script>

<style lang="scss" module>
.root {
    user-select: none;
    cursor: pointer;

    &.active {
        color: #ffdd00;
    }
}
</style>
