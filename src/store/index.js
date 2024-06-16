
import { createStore } from 'vuex'
import api from '@/modules/api'
const store = createStore({
  state: { 
    locale: 'EN'
   },
  mutations: { },
  actions: {}, 
  modules: {api}
})

export default store