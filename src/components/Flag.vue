<template functional>
    <div :class="[data.class, $style.root]"><img :class="$style.flag" :src="`flags/${props.abbr}.svg`" /></div>
</template>

<style lang="scss" module>
@import './../scss/shadow.scss';

$flag-size: 63px;
$flag-size-small: 53px;

.root {
    display: flex;
    justify-content: center;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    overflow: hidden;
    width: $flag-size-small;
    height: $flag-size-small;
    @include box-shadow();
}

.flag {
    height: $flag-size-small;
}

@media only screen and (min-width: 400px) {
    .root {
        width: $flag-size;
        height: $flag-size;
    }

    .flag {
        height: $flag-size;
    }
}
</style>
