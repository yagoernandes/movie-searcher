import React, { useState, SyntheticEvent, KeyboardEvent } from 'react'
import { SearchBar } from './styles'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { API_TOKEN } from '../../../../config/api'

const Home: React.FC = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const handleSearch = () => {
		dispatch(push(`/search?query=${encodeURIComponent(text)}`))
	}

	const keyPressed = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleSearch()
		}
	}
	console.log(API_TOKEN)
	return (
		<SearchBar>
			<input
				dir="auto"
				id="search_v4"
				name="query"
				type="text"
				placeholder="Search for a movie, tv show, person......"
				value={text}
				onChange={event => setText(event.target.value)}
				onKeyPress={keyPressed}
			/>
			<button type="button" onClick={handleSearch}>
				Search
			</button>
		</SearchBar>
	)
}

export default Home
