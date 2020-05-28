import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'
import { Page } from '../styles'

import Home from '../pages/Home'
import Result from '../pages/Result'

const Routes = () => (
	<ConnectedRouter history={history}>
		<Page>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/result" component={Result} />
			</Switch>
		</Page>
	</ConnectedRouter>
)

export default Routes
