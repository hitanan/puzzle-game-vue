<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Game1 msg="Welcome to Your Vue.js App"/> -->
     <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'game1'}">Game1</router-link>
      <router-link to="/game2">Game2</router-link>
     </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Game1 from './components/Game1.vue'
export default {
  name: 'app',
  components: {
    Game1
  }
}
</script>

<style lang="scss">
 @import 'styles/style.scss';
</style>
