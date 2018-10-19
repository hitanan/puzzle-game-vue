<template>
  <div  v-if="!again" class="popup_start popup" v-on:click="$emit('play')">
    <img src="../assets/images/startbutton2.png" alt="startbutton2" class="dis_start" />
  </div>
  <div v-else class="popup_end popup">
    <div class="box_end">
      <p><img src="../assets/images/consgrabutton.png" alt="consgrabutton" class="dis_end"><span id="show_score">{{result}}</span></p>
      <p class="again" v-on:click="$emit('play')"><span>Try again</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    again: false,
    result: 0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
