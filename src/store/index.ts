import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { ApiState } from './ducks/api/types'
import {
	routerMiddleware,
	RouterState,
} from 'connected-react-router'

import history from '../routes/history'

const sagaMiddleware = createSagaMiddleware()

export interface ApplicationState {
	router: RouterState
	api: ApiState
}

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const store: Store<ApplicationState> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)

export default store
