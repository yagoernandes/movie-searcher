import React from 'react'
import { SearchPage } from './styles'
import SearchBar from './components/SearchBar'
import Loader from '../../components/Loader'

const Home: React.FC = () => {
	return (
		<SearchPage>
			<Loader />
			<h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
			<br />
			<SearchBar />
		</SearchPage>
	)
}

export default Home
