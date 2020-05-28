import React from 'react'
import { SearchPage } from './styles'
import SearchBar from './components/SearchBar'

import { API_TOKEN } from '../../config/api'

const Home: React.FC = () => {
	console.log(API_TOKEN)
	return (
		<SearchPage>
			<h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
			<br />
			<SearchBar />
		</SearchPage>
	)
}

export default Home
