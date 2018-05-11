<template>
    <div :class="$style.root">
        <div :class="$style.name">{{ item.name }}</div>
        <div :class="$style.artist" @click="handleFetch">{{ `${item.artist} - ${item.song}` }}<icon :class="$style.play" name="play-circle" /></div>
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
        handleFetch() {
            if (!this.item.vId) {
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
                        this.$set(this.item, 'vId', response.data.items[0].id.videoId);
                        this.$emit('openVideo', this.item);
                    } catch (err) {
                        // error
                    }
                }).catch(() => {
                    // error
                });
            } else {
                this.$emit('openVideo', this.item);
            }
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

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

.play {
    margin-left: $base-size-s;
}

</style>
