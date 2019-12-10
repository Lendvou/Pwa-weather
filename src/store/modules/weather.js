import moment from 'moment'
import axios from 'axios'

const weather = {
  namespaced: true,

  state: {
    days: []
  },
  
  mutations: {
    SET_DAYS(state, days) {
      state.days = days
    }
  },

  actions: {
    async fetchData({ commit }, city) {
      const { data } = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          q: city,
          units: "imperial",
          appid: "fd3150a661c1ddc90d3aefdec0400de4"
        }
      })

      const dates = data.list.map(el => el.dt_txt)
      const temps = data.list.map(el => ((el.main.temp - 32) * 5/9).toFixed(2))

      const day1 = { 
        title: 'Сегодня',
        list: [] 
      }
      const day2 = { 
        title: 'Завтра',
        list: [] 
      }
      const day3 = { 
        title: 'Послезавтра',
        list: [] 
      }
      const day4 = { 
        title: 'Через 3 дня',
        list: [] 
      }

      const now = Date.now()
      const oneDay = 86400000

      dates.forEach((el, i) => {
        if (moment().format('DD') == moment(el).format('DD')) {
          day1.list.push({
            temp: temps[i],
            time: el
          })
        } else if (moment(now + oneDay).format('DD') == moment(el).format('DD')) {
          day2.list.push({
            temp: temps[i],
            time: el
          })
        } else if (moment(now + oneDay * 2).format('DD') == moment(el).format('DD')) {
          day3.list.push({
            temp: temps[i],
            time: el
          })
        } else if (moment(now + oneDay * 3).format('DD') == moment(el).format('DD')) {
          day4.list.push({
            temp: temps[i],
            time: el
          })
        }
      })

      const days = [day1, day2, day3, day4]

      commit('SET_DAYS', days)
    },
  },

  getters: {
    days: state => state.days
  }
}

export default weather
