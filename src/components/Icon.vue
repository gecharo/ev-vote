<template functional>
    <i
        :class="[data.class, 'fa', {[`fa-${props.name}`]: !!props.name}, {[`fa-${props.size}`]: !!props.size}, $style.root, {[$style.active]: props.active}]"
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
