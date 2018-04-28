<template>
    <li :class="$style.countriesListItem">
        <div :class="$style.container">
            <span :class="$style.started">{{ item.id }}</span>
            <span :class="$style.position"><span>{{ index + 1 }}</span></span>
            <flag :abbr="item.abbr" />
            <span :class="$style.name">{{ item.name }}</span>
            <span :class="$style.show" @click="showVote">
                <i :class="'fa fa-star vote' + (item.vote > 0 ? ' voted' : '')" aria-hidden="true" />
            </span>
            <span :class="$style.currentVote"><span v-if="item.vote !== 0">{{ item.vote }}</span></span>
        </div>
        <div :class="$style.voteList" v-if="voteVisible">
            <div :class="$style.votes" @click="vote" v-for="(item, index) in votes" :key="index">
                <span>{{ item + 1 }}</span>
            </div>
        </div>
    </li>
</template>

<script>
import Flag from './Flag';

export default {
    name: 'countries-list-item',
    components: {
        Flag
    },
    props: {
        index: Number,
        item: Object,
        abbr: String
    },
    data() {
        return {
            voteVisible: false,
            votes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        };
    },
    methods: {
        showVote() {
            this.voteVisible = !this.voteVisible;
        },
        vote(event) {
            const vote = Number(event.currentTarget.children[0].innerHTML);
            this.$emit('vote', this.index, vote);
            this.voteVisible = false;
        }
    }
};
</script>

<style lang="scss" module>
@import "./../scss/sizes.scss";

.countries-list-item {
  margin: 0;
  padding: 0;
}
.container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.started {
  width: 20px;
  text-align: center;
  color: #666666;
}
.position {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: 0 24px;
  border-radius: 50%;
  background-color: #00aa44;
  color: white;
  font-size: 22px;
  letter-spacing: -2px;

  & > span {
    margin-right: 2px;
    margin-top: 1px;
  }
}
.name {
  flex: 1;
}
.flag {
  margin: $base-size-s;
  margin-right: $base-size-l;
  transform: scale(1.3);
}
.fa {
  transform: scale(1.5);
  padding: $base-size-m;
}
.show:hover > i {
  color: #ffff00;
}
.vote {
  user-select: none;
  cursor: pointer;

  &.voted {
    color: #ffdd00;
  }
}
.currentVote {
  width: 20px;
  text-align: center;
}
.voteList {
  display: flex;
  flex-direction: column;
  padding: $base-size-s 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.votes {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  background-color: #202020;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  margin: $base-size-xs;

  &:hover {
    background-color: #444444;
  }
}
</style>
