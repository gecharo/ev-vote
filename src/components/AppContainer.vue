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

.container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: $base-size-l;
    max-width: 720px;
    width: 100%;
}
</style>
