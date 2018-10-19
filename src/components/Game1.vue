<template>
  <div id="wrapper">
    <div class="main" v-bind:class="{ relative: smallWindows }" id="content" v-if="playing">
        <div class="container box_shadow">
            <div class="head-letter-infor txt-center" >
                <div class="col-w30 letter-above" id="lt-first"><p id="letter">{{randomItem}}</p></div>
                <div class="col-w70 load-time">
                    <!-- <div id="progressBar" ref="progressBar"><div class="bar" v-bind:style="{width:barWidth}"> -->
                    <div id="progressBar" ref="progressBar"><div class="bar">
                      <span>{{Math.floor(time/60)}}:{{time % 60}}</span>
                      </div></div>
                    <div class="number-pair">
                        <p>Pairs Matched : <span id="result">{{result}}</span></p>
                    </div>
                </div>
            </div>
            <div class="list-letter txt-center mgt50">
                <div class="e_row">
                    <div v-for="item in randomArray" :key="item" class="letter" v-on:click="select(item)">
                      <p>{{item}}</p>
                    </div>
                </div>
            </div>
        </div><!-- end.container -->
    </div><!-- end#content -->
    <!-- <audio ref="player" v-show="audioUrl" preload="metadata" ><source :src="audioUrl"></audio> -->
    <Popup v-bind:result="result" v-bind:again="again" v-show="!playing" v-on:play="start()"></Popup>
  </div>
</template>

<script>
/* eslint-disable */
import Popup from './Popup.vue';
import { getRandomItems, playAudio} from "../Helper.js";
import JQuery from 'jquery';
export default {
  name: 'Game1',
  props: {
    msg: String
  },
  data: function () {
    return {
      size: 20,
      time: Number,
      result: 0,
      playing:false,
      again:false,
      randomItem: String,
      randomArray: [],
      barWidth: '0',
      smallWindows : false
    }
  },
  components: {
    Popup
  },
  methods: {
    render:function() {
      this.randomArray = getRandomItems(this.size);
      var randomIndex = Math.floor(Math.random()*this.size);
      this.randomItem = this.randomArray[randomIndex];
      playAudio(this.randomItem);
    },
    start: function () {
      var timetotal = 60;
      this.result = 0;
      this.time = timetotal;
      this.playing = true;
      this.render();
      var progInterval = setInterval(() => {
        this.time--;
        // this.barWidth = (this.time *100.0 / timetotal) + '%';
        if (this.$refs.progressBar != null) {
          this.barWidth = (this.time * this.$refs.progressBar.clientWidth / timetotal) +'px';
        }
        JQuery(this.$el).find('#progressBar > div').animate({ width: this.barWidth }, 1000,'linear');
        // console.log($(this.$el));
        if (this.time == 0) {
          clearInterval(progInterval);
          this.playing = false;
          this.again = true;
        }
      }, 1000);
    },
    select: function(item) {
      if (item == this.randomItem) {
        this.result++;
        this.render();
      } else {
        playAudio(item);
      }
    }
  },mounted() {
    this.smallWindows = window.innerHeight < 900;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
