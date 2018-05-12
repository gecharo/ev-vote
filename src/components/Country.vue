<template>
    <div :class="$style.root">
        <div :class="$style.name">{{ name }}</div>
        <div :class="$style.artist"><span @click="handleFetch">{{ `${artist} - ${song}` }}<icon :class="$style.play" name="play-circle" /></span></div>
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
        name: String,
        artist: String,
        song: String,
        vId: String
    },
    data() {
        return {
            opened: false
        };
    },
    methods: {
        handleFetch() {
            if (!this.vId) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyBqFiACMreuyi2AW1UN7Vqf9x_u06DVOmM',
                        part: 'snippet',
                        maxResults: 1,
                        channelId: 'UCRpjHHu8ivVWs73uxHlWwFA',
                        q: `${this.name} ${this.artist} ${this.song} LIVE`
                    }
                }).then((response) => {
                    try {
                        this.$emit('openVideo', response.data.items[0].id.videoId);
                    } catch (err) {
                        // error
                    }
                }).catch(() => {
                    // error
                });
            } else {
                this.$emit('openVideo', this.vId);
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
    font-size: 22px;
    line-height: 20px;
}

.artist {
    width: 100%;
    margin-top: $base-size-xs;
    font-size: 14px;
    color: #B9B9B9;
    opacity: 0.8;

    > span {
        cursor: pointer;
    }

    &:hover {
        color: #efefef;
    }
}

.play {
    margin-left: $base-size-s;
}

</style>
