<template functional>
    <div :class="[data.class, $style.container]">
        <slot/>
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: $base-size-l;
}
</style>
