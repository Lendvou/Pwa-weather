import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/'

export default instance
