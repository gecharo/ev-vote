<template>
    <div :class="$style.footer">
        <div :class="$style.left">
            <a href="mailto:gecharo@gmail.com">gecharo</a> © 2018
        </div>
        <div :class="$style.right" v-if="active">
            <b :class="$style.count" v-if="clicksLeft < 3">{{clicksLeft}}</b>
            <icon :class="$style.reset" name="times-circle" size="lg" @click="handleClick" />
        </div>
    </div>
</template>

<script>
import Icon from './Icon';

let resetTimeoutId;

export default {
    components: {
        Icon
    },
    props: {
        active: Boolean
    },
    data() {
        return {
            clicksLeft: 3
        };
    },
    methods: {
        handleClick() {
            clearTimeout(resetTimeoutId);
            this.clicksLeft -= 1;
            if (this.clicksLeft === 0) {
                this.$emit('reset');
                this.clicksLeft = 3;
            } else {
                resetTimeoutId = setTimeout(() => {
                    clearTimeout(resetTimeoutId);
                    this.clicksLeft = 3;
                }, 400);
            }
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

$footer-color: rgba(0, 0, 0, 0.31);
$footer-color-hover: rgba(0, 0, 0, 0.65);

.footer {
    padding: $base-size-m 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    color: $footer-color;
}
.left {
    font-size: 16px;
    font-weight: bold;
    flex: 1 1 auto;

    a:link, a:visited {
        color: $footer-color;
        text-decoration: none;
    }
    a:hover, a:active {
        color: $footer-color-hover;
    }
}
.right {
    flex: 0 0 auto;
    padding-right: 41px;
    font-size: 24px;
}
.reset {
    &:hover {
        color: $footer-color-hover;
    }
}
.count {
    padding-right: $base-size-l;
}
</style>
