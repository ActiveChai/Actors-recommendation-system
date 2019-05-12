import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        actor: []
    },
    mutations: {
        getActor (state, val) {
            state.actor = val
        }
    },
    actions: {
        getActor (context, id) {
            axios.get(`http://localhost:3000/actor/${id}`).then((actor) => {
                context.commit('getActor', actor)
            })
        }
    }
})
