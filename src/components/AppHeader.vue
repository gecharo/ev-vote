<template>
    <div :class="$style.header">
        <img src="assets/logo.jpg" />
    </div>
</template>

<script>
export default {
    name: 'app-header'
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.header {
  padding: $base-size-m;
  position: relative;
  z-index: 1;
}
</style>
