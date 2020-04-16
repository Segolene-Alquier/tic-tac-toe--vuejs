<template>
  <div class="lobby-wrapper">
    <h1>Tic Tac Toe</h1>
    <img class="lobby-logo" src="tic-tac-toe.png" width="100px" />
    <form class="lobby">
      <div>
        <label>Player 1</label>
        <input type="text" placeholder="Name for player 1" v-model="player1Name" />
      </div>
      <div>
        <label>Player 2</label>
        <input type="text" placeholder="Name for player 2" v-model="player2Name" />
      </div>

      <div class="lobby__action">
        <button @click="start" type="submit">Start the game</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player1Name: "",
      player2Name: ""
    };
  },
  methods: {
    start() {
      this.$store.commit("updatePlayersName", { player1Name: this.player1Name, player2Name: this.player2Name });
      this.$router.push("/game");
    }
  }
};
</script>
