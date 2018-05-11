<template>
    <div :class="$style.root">
        <div :class="$style.videoWrapper">
            <iframe id="video" :class="$style.video" :src="`https://www.youtube.com/embed/${vId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <icon :class="$style.close" @click="handleClose" name="close" size="lg" />
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
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.root {
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;

}

.close {
    position: absolute;
    top: $base-size-l;
    right: $base-size-l;
}

.videoWrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
