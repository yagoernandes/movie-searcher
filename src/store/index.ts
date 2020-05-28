import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { RepositoriesState } from './ducks/repositories/types'
import {
	routerMiddleware,
	RouterState,
} from 'connected-react-router'

import history from '../routes/history'

const sagaMiddleware = createSagaMiddleware()

export interface ApplicationState {
	repositories: RepositoriesState
	router: RouterState
}

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const store: Store<ApplicationState> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)

export default store
