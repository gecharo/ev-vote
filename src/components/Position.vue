<template functional>
    <span :class="[data.class, $style.position, {[$style.active]: props.active}, {[$style.semiActive]: props.semiActive}]"><span><slot /></span></span>
</template>

<style lang="scss" module>
    .position {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #3c3f44;
        border: 2px solid #3a3b40;
        color: white;
        font-size: 18px;

        & > span {
            opacity: 0.39;
        }

        &.semiActive {
            & > span {
                opacity: 0.8;
            }
            background-color: #366948;
        }

        &.active {
            & > span {
                opacity: 1;
            }
            background-color: #00aa44;
        }
    }
</style>
