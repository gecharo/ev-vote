<template functional>
    <div :class="[data.class, $style.container]">
        <slot/>
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: $base-size-m 0;
}
</style>
