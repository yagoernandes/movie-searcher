import axios from 'axios'
import { API_URL, API_TOKEN } from '../config/api'

const api = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${API_TOKEN}`,
	},
})

export default api
