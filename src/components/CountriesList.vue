<template>
    <ul :class="$style.list">
        <countries-list-item
            v-for="(item, index) in items"
            :item="item"
            :index="index"
            :key="item.startPosition"
            @vote="handleVote"
            @openVideo="handleOpenVideo"
        />
    </ul>
</template>

<script>
import CountriesListItem from './CountriesListItem';

export default {
    components: {
        CountriesListItem
    },
    props: {
        items: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    methods: {
        handleVote(index, { vote }) {
            let i = 0;
            const { items } = this;

            const newItem = items.splice(index, 1)[0];

            while (i < items.length) {
                if (items[i].vote > vote) {
                    i += 1;
                } else {
                    break;
                }
            }

            const insertIndex = i;

            let downVote = vote;
            while (i < items.length && downVote > 0 && items[i].vote > 0) {
                if (items[i].vote === downVote) {
                    downVote -= (downVote === 12 || downVote === 10) + 1;
                    items[i].vote = downVote;
                }
                i += 1;
            }

            this.items.splice(insertIndex, 0, newItem);
            this.$emit('voteChange', this.items);
        },
        handleOpenVideo(item) {
            this.$emit('voteChange', this.items);
            this.$emit('openVideo', item.vId);
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 18px;

    & > li:not(:last-child) {
        margin-bottom: $base-size-m;
    }
}
</style>
