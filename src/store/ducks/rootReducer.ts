import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history'
import repositories from './repositories'
import api from './api'

export default combineReducers({
	router: connectRouter(history),
	repositories,
	api,
})
