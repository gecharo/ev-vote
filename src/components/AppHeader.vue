<template functional>
    <div :class="[data.class, $style.header]">
        <img src="images/logo.png" />
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.header {
    padding: 2 * $base-size-xl 0;
    text-align: center;
}
</style>
