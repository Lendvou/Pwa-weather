<template>
  <div class="home">
    <div class="zapaddingui">
      <md-input-container>
        <label>Введите название города</label>
        <md-input v-model="city"/>
      </md-input-container>
    </div>
	 	

    <md-button @click="fetchData">Поиск</md-button>
      <vue-loading 
        :active="isLoading" 
        is-full-screen />

      <carousel 
        v-if="isVisible"
        :per-page="1">

        <slide>
          <weather-chart 
            :city="city"
            :day="days[0]" />
        </slide>

        <slide>
          <weather-chart 
            :city="city"
            :day="days[1]" />
        </slide>

        <slide>
          <weather-chart 
            :city="city"
            :day="days[2]" />
        </slide>

        <slide>
          <weather-chart 
            :city="city"
            :day="days[3]" />
        </slide>

      </carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import moment from 'moment'
import { Carousel, Slide } from 'vue-carousel'
import VueLoading from 'vue-element-loading'

import WeatherChart from '@/components/weatherChart.vue'

export default {
  components: {
    WeatherChart,
    Carousel,
    Slide,
    VueLoading
  },

  data() {
    return {
      city: '',
      isVisible: false,
      isLoading: false
    }
  },

  computed: {
    ...mapGetters({
      days: 'weather/days'
    })
  },

  methods: {
    ...mapActions({
      fetchChart: 'weather/fetchData'
    }),

    async fetchData() {
      this.isLoading = true
      this.isVisible = false

      await this.fetchChart(this.city)

      this.isVisible = true
      this.isLoading = false
    }
  }
}
</script>

<style>
.home{
	margin: 0 20%;
}

@media (max-width: 800px) {
  .home {
    margin: 0 5px;
  }

  .md-card-content {
    padding: 0 3px 5px !important;
  }

  .md-sidenav-content {
    width: 240px !important;
  }
}

.zapaddingui {
  padding: 10px 20px;
}
</style>