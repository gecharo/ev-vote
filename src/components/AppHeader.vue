<template functional>
    <div :class="$style.header">
        <img src="images/logo.png" />
    </div>
</template>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.header {
    margin: 2 * $base-size-xl $base-size-s 1.5 * $base-size-xl $base-size-s;
}
</style>
