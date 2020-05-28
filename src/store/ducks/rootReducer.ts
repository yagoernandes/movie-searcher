import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history'
import repositories from './repositories'

export default combineReducers({
	router: connectRouter(history),
	repositories,
})
