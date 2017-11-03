import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import SignUp from '../components/member/SignUp.vue';
import SignIn from '../components/member/SignIn.vue';
import MessageBoard from '../components/message/MessageBoard.vue';
import NewMessage from '../components/message/NewMessage.vue';
import Msg from '../components/message/Msg.vue';
import WatchMessage from '../components/message/WatchMessage.vue';
import ChangeMessage from '../components/message/ChangeMessage.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: {
        loginCheck: true
      }
    },
    {
      path: '/signUp',
      component: SignUp,
      meta: {
        loginCheck: true
      }
    },
    {
      path: '/signIn',
      component: SignIn,
      meta: {
        loginCheck: true
      }
    },
    {
      path: '/messageBoard',
      component: MessageBoard,
      meta: {
        loginCheck: true
      },
      children: [
        {
          path: '/messageBoard/msg',
          component: Msg,
          meta: {
            getMsg: true
          }
        },
        {
          path: '/messageBoard/watchMessage/:id',
          component: WatchMessage,
          meta: {
            getMsg: true
          }
        },
      ]
    },
    {
      path: '/newMessage',
      component: NewMessage,
      meta: {
        messageLoginCheck: true
      }
    },
    {
      path: '/*',
      redirect: '/'
    }
  ],
  mode: "history"
})
