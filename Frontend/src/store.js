import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import investors from './modules/investors'
import entities from './modules/entities'
import admin from './modules/admin'
import investments from './modules/investments'
import adminNews from './modules/adminNews'
import investmentNotes from './modules/investmentNotes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    investors,
    entities,
    admin,
    investments,
    adminNews,
    investmentNotes,
  }
})
