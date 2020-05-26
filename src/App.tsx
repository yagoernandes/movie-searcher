import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'

import { Page } from './styles'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Page>
						<Route path="/">
							<Result />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
					</Page>
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
