<template>
  <div class="game">
    <Status :winner="winner.player" :player="player" :isDrawGame="isDrawGame" />
    <div class="game__board">
      <Square
        class="game__box"
        v-for="(squareValue, position) in squares"
        :key="position"
        :value="squareValue"
        :is-game-over="isGameOver"
        :is-winner="isWinner(position)"
        @click="onSquareClick(position)"
      />
    </div>
    <Restart @click="reset()" />
  </div>
</template>

<script>
import Status from "./Status";
import Square from "./Square";
import getWinner from "./../utils/winner";
import Restart from "./Restart";

export default {
  components: {
    Square,
    Status,
    Restart
  },
  data() {
    return {
      player: "X",
      squares: Array(9).fill(null)
    };
  },
  computed: {
    winner() {
      return getWinner(this.squares);
    },
    isDrawGame() {
      return this.squares.filter(square => !square).length === 0;
    },
    isGameOver() {
      return this.isDrawGame || this.winner.player;
    }
  },
  methods: {
    onSquareClick(position) {
      if (this.squares[position]) {
        return;
      }
      this.$set(this.squares, position, this.player);
      this.player = this.player === "X" ? "O" : "X";
    },
    isWinner(position) {
      return this.winner.positions.includes(position);
    },
    reset() {
      this.player = "X";
      this.squares = Array(9).fill(null);
    }
  }
};
</script>
