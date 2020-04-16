import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player1Name: "",
    player2Name: ""
  },
  mutations: {
    updatePlayersName(state, { player1Name, player2Name }) {
      state.player1Name = player1Name;
      state.player2Name = player2Name;
    }
  }
});
