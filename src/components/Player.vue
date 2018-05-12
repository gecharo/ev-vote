<template>
    <div :class="$style.root" @click="handleClose">
        <iframe :width="vWidth" :height="vHeight" :src="`https://www.youtube.com/embed/${vId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <icon :class="$style.close" name="close" size="2x" />
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

            this.vWidth = Math.min(720, w / h > 16 / 9 ? (h * 16) / 9 : w);
            this.vHeight = (this.vWidth * 9) / 16;
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.close {
    position: absolute;
    top: $base-size-l;
    right: $base-size-l;
}

</style>
