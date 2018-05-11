<template>
    <div :class="$style.root">
        <iframe :width="vWidth" :height="vHeight" :src="`https://www.youtube.com/embed/${vId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <icon :class="$style.close" @click="handleClose" name="close" size="2x" />
    </div>
</template>

<script>
import Icon from './Icon';

export default {
    components: {
        Icon
    },
    props: {
        vId: String,
        handleClose: Function
    },
    data() {
        return {
            vWidth: 0,
            vHeight: 0
        };
    },
    created() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            const w = window.innerWidth;
            const h = window.innerHeight;

            if (w / h > 16 / 9) {
                this.vHeight = h;
                this.vWidth = (h * 16) / 9;
            } else {
                this.vWidth = w;
                this.vHeight = (w * 9) / 16;
            }
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
}

.close {
    position: absolute;
    top: $base-size-l;
    right: $base-size-l;
}

</style>
