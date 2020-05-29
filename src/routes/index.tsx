import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'
import { Page, Background } from '../styles'

import Home from '../pages/Home'
import Search from '../pages/Search'
import MovieDetails from '../pages/MovieDetails'
import TvDetails from '../pages/TvDetails'
import PersonDetails from '../pages/PersonDetails'

const Routes = () => (
	<ConnectedRouter history={history}>
		<Background />
		<Page>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search" component={Search} />
				<Route exact path="/movie/:id" component={MovieDetails} />
				<Route exact path="/tv/:id" component={TvDetails} />
				<Route exact path="/person/:id" component={PersonDetails} />
			</Switch>
		</Page>
	</ConnectedRouter>
)

export default Routes
