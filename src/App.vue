<template>
    <div :class="$style.root">
        Hello
        <bbd />
    </div>
</template>

<script>
import Bbd from './Bbd';

export default {
    name: 'app',
    components: {
        Bbd
    }
};
</script>

<style lang="scss" module>
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #555555;
  background: white;
}

.root {
  font-size: 24px;
}
</style>
