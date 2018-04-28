<template>
    <span :class="$style.flag"><img :src="`assets/flags/${abbr}.png`" /></span>
</template>

<script>
export default {
    name: 'countries-list-item',
    props: {
        abbr: String
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.flag {
  margin: $base-size-s;
  margin-right: $base-size-l;
  padding: $base-size-m;
  transform: scale(1.3);
}
</style>
