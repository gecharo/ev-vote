<template>
    <span :class="$style.root"><img :class="$style.flag" :src="`flags/${abbr}.svg`" /></span>
</template>

<script>
export default {
    props: {
        abbr: String
    }
};
</script>

<style lang="scss" module>
@import './../scss/shadow.scss';

.root {
    line-height: 0;
}

.flag {
    width: 60px;
    @include box-shadow();
}
</style>
