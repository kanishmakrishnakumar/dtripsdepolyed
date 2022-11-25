<template>
    <div>
        <v-tabs
        v-model="tab"
        centered
        slider-color="#f04e6e"
        background-color="transparent">

        <v-tab  class="ml-1 purple--text"
        width="200px">
        ONE-WAY
        </v-tab>

        <v-tab class="purple--text">
         ROUND-TRIP
        </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
    </v-tabs-items>

    <v-list three-line class="pa-6" v-if="tab">
      <round-trip/>
      </v-list>

      <v-list three-line class="pa-6" v-else> 
        <one-way/>
      </v-list>

    </div>
</template>

<script>
import OneWay from './OneWay.vue'
import RoundTrip from './RoundTrip.vue'


  export default {
  components: {OneWay, RoundTrip  },
    data () {
      return {
        tab: null,
        items: [
          'ONE-WAY', 'ROUND-TRIP'
        ],
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        text2: 'Lorem ipsum ',
      }
    },
  }
</script>