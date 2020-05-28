import axios from 'axios'
import { REACT_APP_API_URL, REACT_APP_API_TOKEN } from '../config/api'

const api = axios.create({
	baseURL: REACT_APP_API_URL,
	headers: {
		Authorization: `Bearer ${REACT_APP_API_TOKEN}`,
	},
})

export default api
