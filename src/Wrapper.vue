<template functional>
    <div :class="$style.wrapper">
        <div :class="$style.gradient">&nbsp;</div>
        <div :class="$style.waves">&nbsp;</div>
        <slot />
    </div>
</template>

<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 320px;
}

.gradient {
    position: absolute;
    z-index: -1;
    background-image: url("images/gradient.png");
    background-repeat: repeat-x;
    background-position: center;
    width: 100%;
    height: 342px;
    opacity: 0.5;
}

.waves {
    position: absolute;
    z-index: -1;
    background-image: url("images/waves.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 270px;
}
</style>
