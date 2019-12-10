<template>
  <div>
    <md-card class="card-margin">
      <md-card-header>
        <!-- <div class="md-title">{{ city }}, погода на {{ moment(day.time).format('DD') }}</div> -->
        <div class="md-title">
          <span class="capitalize">{{ city }}</span>, погода на {{ day.list[0].time | toDateFormat }}
        </div>
      </md-card-header>

      <md-card-content>
        <apex-chart 
          :options="options"
          :series="series"
          type="line"
          height="270" />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import ApexChart from 'vue-apexcharts'
import { Carousel, Slide } from 'vue-carousel'
import moment from 'moment'


export default {
  components: {
    ApexChart,
    Carousel,
    Slide
  },

  props: {
    day: {
      type: Object,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },

  filters: {
    toDateFormat(val) {
      return moment(val).format('DD-MM-YYYY')
    }
  },

  data() {
    return {
      options: {
        chart: {
          id: 'chart-weather',
          dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 4,
            opacity: 0.1
          },
          toolbar: {
            show: false
          },
        },
        markers: {
          size: 4,
          colors: '#00C1FF'
        },
        legend: {
          show: false
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          xaxis: {
            lines: {
              show: false
            }
          },   
          yaxis: {
            lines: {
              show: true
            }
          },
        },
        stroke: {
          curve: 'smooth',
          width: [4, 3]
        },
        colors:['#00C1FF'],
        // fill: {
        //   type: 'gradient',
        //   gradient: {
        //     shade: 'dark',
        //     inverseColors: false,
        //     gradientToColors: [
        //       'blue'
        //     ],
        //     shadeIntensity: 1,
        //     type: 'horizontal',
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 100, 100, 100]
        //   }
        // },
        yaxis: {
          labels: {
            formatter: val => val.toFixed(2),
          }
        },
        xaxis: {
          categories: []
        }
      },

      series: []
    }
  },

  computed: {
    time() {
      return moment(this.day.time).format('DD')
    }
  },

  mounted() {
    this.setChart()
  },

  updated() {
    console.log('something', this.day)
  },

  methods: {
    setChart() {
      const series = this.day.list.map(el => el.temp)
      const categories = this.day.list.map(el => moment(el.time).format('HH:mm'))

      this.options = {
        ...this.options,
        xaxis: {
          categories
        }
      }
      this.series = [{
        name: 'Сегодня',
        data: series
      }]
    }
  }
}
</script>

<style>
  .card-margin {
    margin: 30px 50px;
  }

  @media (max-width: 1200px) {
    .card-margin {
      margin: 5px 7px;
    }
  }

  .capitalize {
    text-transform: capitalize;
  }

  .VueCarousel-dot {
    outline: none !important;
  }

  .md-card-header {
    padding-top: 26px !important;
  }
</style>