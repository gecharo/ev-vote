/* eslint-disable no-new */

import Vue from 'vue';
import Wrapper from './Wrapper';
import App from './App.vue';
import './scss/global.scss';

new Vue({
    el: '#app',
    template: '<Wrapper><App /></Wrapper>',
    components: {
        Wrapper,
        App
    }
});
