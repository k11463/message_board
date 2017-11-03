import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    login: false,
    user: null,
    identity: null,
    loading: false,
    msg: [],
    isUser: false,
    hasMsg: true,
    getOneMsg: null,
    chgMsg: false,
    alertBox: {
      open: false,
      content: null,
      site: null
    },
    yesno: false,
  },
  mutations: {
    setLogin(state, payload){
      state.login = payload;
    },
    setUser(state, payload){
      state.user = payload;
    },
    setIdentity(state, payload){
      state.identity = payload;
    },
    setLoading(state, payload){
      state.loading = payload;
    },
    setMsg(state, payload){
      state.msg = payload;
    },
    setIsUser(state, payload){
      state.isUser = payload;
    },
    setHasMsg(state, payload){
      state.hasMsg = payload;
    },
    setGetOneMsg(state, payload){
      state.getOneMsg = payload;
    },
    setChgMsg(state, payload){
      state.chgMsg = payload;
    },
    setAlertOpen(state, payload){
      state.alertBox.open = payload;
    },
    setAlertContent(state, payload){
      state.alertBox.content = payload;
    },
    setAlertSite(state, payload){
      state.alertBox.site = payload;
    },
    setYesNo(state, payload){
      state.yesno = payload;
    }
  },
  actions: {
    signIn({commit}, payload){
      commit('setLoading', true);
      commit('setUser', payload.name);
      commit('setLogin', true);
    },
    loginCheck({commit}, payload){
      return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem('token');
        axios.post('/loginCheck', {token: token}).then((res) => {
          commit('setUser', res.data[0].name);
          commit('setIdentity', res.data[0].identity)
          commit('setLogin', true);
          resolve(res);
        }).catch((err) => {
          reject(err);
        })
      })
    },
    getMessage({commit}){
      axios.get('/selectMessageBoard').then((res) => {
        commit('setMsg', res.data);
        if (this.state.msg[window.localStorage.getItem('index')].msg_name == this.state.user){
          commit('setIsUser', true);
        }
        else{
          commit('setIsUser', false);
        }
      })
    },
    alertBox({commit}, payload){
      commit('setAlertContent', payload.c);
      commit('setAlertSite', payload.s);
      commit('setAlertOpen', true);
    }
  },
  getters: {
  }
})
