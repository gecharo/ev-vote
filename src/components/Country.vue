<template>
    <div :class="$style.root">
        <div :class="$style.name">{{ item.name }}</div>
        <div :class="$style.artist" @click="handleOpen">{{ `${item.artist} - ${item.song}` }}<icon :class="$style.play" name="play-circle" /></div>
        <div :class="$style.videoCnt" v-if="item.videoId && opened">
            <div :class="$style.videoWrapper">
                <iframe id="video" :class="$style.video" :src="`https://www.youtube.com/embed/${item.videoId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <icon :class="$style.close" @click="handleToggle(false)" name="close" size="lg" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Icon from './Icon';

export default {
    components: {
        Icon
    },
    props: {
        item: Object
    },
    data() {
        return {
            opened: false
        };
    },
    methods: {
        handleOpen() {
            if (!this.item.videoId) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyBqFiACMreuyi2AW1UN7Vqf9x_u06DVOmM',
                        part: 'snippet',
                        maxResults: 1,
                        channelId: 'UCRpjHHu8ivVWs73uxHlWwFA',
                        q: `${this.item.name} ${this.item.artist} ${this.item.song} LIVE`
                    }
                }).then((response) => {
                    try {
                        this.$set(this.item, 'videoId', response.data.items[0].id.videoId);
                        this.handleToggle(true);
                    } catch (err) {
                        // error
                    }
                }).catch(() => {
                    // error
                });
            } else {
                this.handleToggle(true);
            }
        },
        handleToggle(val) {
            this.opened = val;
            document.body.style.overflow = val ? 'hidden' : 'auto';
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

@mixin star($size) {
    flex: 0 0 $size;
    width: $size;
    height: $size;
    font-size: $size - 5;
    line-height: $size;
}

.root {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
}

.name {
    width: 100%;
    display: inline-block;
    line-height: 19px;
}

.artist {
    width: 100%;
    font-size: 14px;
    color: #B9B9B9;
    opacity: 0.8;

    cursor: pointer;
}

.videoCnt {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 1;
}

.play {
    margin-left: $base-size-s;
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
