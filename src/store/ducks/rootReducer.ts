import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history'
import api from './api'

export default combineReducers({
	router: connectRouter(history),
	api,
})
