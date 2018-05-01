<template functional>
    <span :class="[data.class, $style.root]"><img :class="$style.flag" :src="`flags/${props.abbr}.svg`" /></span>
</template>

<style lang="scss" module>
@import './../scss/shadow.scss';

.root {
    line-height: 0;
}

.flag {
    width: 62px;
    @include box-shadow();
}
</style>
