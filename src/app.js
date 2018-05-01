/* eslint-disable no-new */

import Vue from 'vue';
import Wrapper from './Wrapper';
import App from './components/App';
import './scss/global.scss';

new Vue({
    el: '#app',
    template: '<Wrapper><App /></Wrapper>',
    components: {
        Wrapper,
        App
    }
});
