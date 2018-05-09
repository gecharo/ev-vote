<template functional>
    <div :class="[data.class, $style.root]"><img :class="$style.flag" :src="`flags/${props.abbr}.svg`" /></div>
</template>

<style lang="scss" module>
@import './../scss/shadow.scss';

$flag-size: 63px;
$flag-size-small: 53px;

.root {
    line-height: 0;
}

.flag {
    width: $flag-size-small;
    height: $flag-size-small;
    overflow: hidden;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    @include box-shadow();
}

@media only screen and (min-width: 400px) {
    .flag {
        width: $flag-size;
        height: $flag-size;
    }
}
</style>
