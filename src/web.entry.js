import Vue from 'vue'
import  './style.scss';
import App from './components/App.vue';

import moment from 'moment-timezone';


new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  } ,
});
