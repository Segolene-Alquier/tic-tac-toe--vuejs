<template>
  <div class="game__status">
    <span v-if="winner">Winner is {{ winnerName }}</span>
    <span v-else-if="isDrawGame">That's a draw game</span>
    <span v-else>Next player is {{ playerName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    winner: String,
    player: String,
    isDrawGame: Boolean
  },
  computed: {
    playerName() {
      let { player1Name, player2Name } = this.$store.state;
      if (player1Name === "") player1Name = "X";
      if (player2Name === "") player2Name = "O";
      return this.player === "X" ? player1Name : player2Name;
    },
    winnerName() {
      let { player1Name, player2Name } = this.$store.state;
      if (player1Name === "") player1Name = "X";
      if (player2Name === "") player2Name = "O";
      return this.winner === "X" ? player1Name : player2Name;
    }
  }
};
</script>
