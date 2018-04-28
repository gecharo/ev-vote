<template>
    <div :class="$style.container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'app-container'
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.ontainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: $base-size-l;
  width: 100%;
  max-width: 720px;
}
</style>
