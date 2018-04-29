<template>
    <span :class="$style.root"><img :class="$style.flag" :src="`flags/${abbr}.png`" /></span>
</template>

<script>
export default {
    props: {
        abbr: String
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
    margin: 0 $base-size-m;
    line-height: 0;
}

.flag {
  width: 60px;
}
</style>
