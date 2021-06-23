import Vue from 'vue'
import Vuex from 'vuex'
import {Cookies} from "quasar";

import auth from './auth'


Vue.use(Vuex)

export default function ({ ssrContext }) {
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies;
  const Store = new Vuex.Store({
    modules: {
       auth,

    },

    strict: process.env.DEBUGGING
  })

  return Store
}
