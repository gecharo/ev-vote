<template>
    <span :class="$style.root"><img :class="$style.flag" :src="`assets/flags/${abbr}.png`" /></span>
</template>

<script>
export default {
    name: 'flag',
    props: {
        abbr: String
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
  margin: 0 $base-size-m;
}

.flag {
  width: 80px;
}
</style>
