import axios from 'axios'

const client = axios.create({
    baseURL: process.env.BASE_URL,
})

export default client