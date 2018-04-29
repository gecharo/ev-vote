<template functional>
    <div :class="$style.header">
        <img src="images/logo.png" />
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.header {
    padding: $base-size-m;
    position: relative;
    z-index: 1;
}
</style>
