import React, { useState } from 'react'
import { SearchPage } from './styles'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { API_TOKEN } from '../../config/api'

const Home: React.FC = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const handleSearch = () => {
		// console.log('buscar')
		dispatch(push(`/search?query=${encodeURIComponent(text)}`))
	}
	console.log(API_TOKEN)
	return (
		<SearchPage>
			<h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
			<br />
			<div className="search-input">
				<input
					dir="auto"
					id="search_v4"
					name="query"
					type="text"
					placeholder="Search for a movie, tv show, person......"
					value={text}
					onChange={event => setText(event.target.value)}
				/>
				<button type="button" onClick={handleSearch}>
					Search
				</button>
			</div>
		</SearchPage>
	)
}

export default Home
