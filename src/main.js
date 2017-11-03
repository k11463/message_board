import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import sweetAlert from 'vue-sweetalert';

import {router} from './router';
import {store} from './store';

//import AlertBox from './components/AlertBox.vue';

Vue.use(VueAxios, axios)
Vue.use(sweetAlert)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginCheck)){
    store.dispatch('loginCheck').then(() => {
      store.commit('setChgMsg', false);
      store.commit('setAlertSite', null);
      store.commit('setAlertOpen', false);
      next();
    }).catch(() => {
      store.commit('setChgMsg', false);
      store.commit('setAlertSite', null);
      store.commit('setAlertOpen', false);
      next();
    })
  }
  if (to.matched.some(record => record.meta.messageLoginCheck)){
    store.dispatch('loginCheck').then(() => {
      store.commit('setChgMsg', false);
      store.commit('setAlertSite', null);
      store.commit('setAlertOpen', false);
      next();
    }).catch(() => {
      store.commit('setChgMsg', false);
      store.commit('setAlertSite', null);
      store.commit('setAlertOpen', false);
      store.dispatch('alertBox', {c: '以下操作需要登入，請先登入!', s: '/signIn'});
    })
  }
  if (to.matched.some(record => record.meta.getMsg)){
    store.dispatch('getMessage');
    next();
  }
})

//Vue.component('app-alert', AlertBox);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
