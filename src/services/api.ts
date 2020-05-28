import axios from 'axios'
import { API_URL, API_TOKEN } from '../config/api'

const api = axios.create({
	baseURL: API_URL,
	headers: {
		// Authorization: `Bearer ${API_TOKEN}`,
		Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzIyZjU2ZTQ1NDNkNmQ3OTczNzljNWMyZjA2YjllOSIsInN1YiI6IjVlY2YxMDdhNWMwNzFiMDAxYzI4NjA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H_n5_0b_yqIK-Kb9ExFEAfEQjgLaDJTAIsagb87IDNE`,
	},
})

export default api
