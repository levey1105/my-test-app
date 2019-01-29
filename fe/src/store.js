import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{name:"hehe"}]
  },
  mutations: {

  },
  actions: {
    loadUsers({state}){
      axios.get('/users')
      .then(response=>{
        state.users = response.data
        console.log(response);
      })
    }
  }
})
