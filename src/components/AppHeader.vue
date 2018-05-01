<template functional>
    <div :class="[data.class, $style.header]">
        <img src="images/logo.png" />
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.header {
    padding: $base-size-l 0;
    text-align: center;
}
</style>
