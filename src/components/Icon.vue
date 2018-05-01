<template functional>
    <i
        :class="['fa', `fa-${props.icon}`, `fa-${props.size}`, $style.root, {[$style.active]: props.active}]"
        v-on="listeners"
        aria-hidden="true"
    />
</template>

<style lang="scss" module>
.root {
    user-select: none;
    cursor: pointer;

    &.active {
        color: #ffdd00;
    }
}
</style>
